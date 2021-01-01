const express = require('express');
const config = require('./config/key');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');
const { User } = require('./models/Users');

const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => { console.log('MongDB Connected...') })
  .catch( (err) => console.log(err) );


// home
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// register
app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    console.log('user name : ' , user.name);
    user.save( (err, userInfo) => {
        if(err) return res.json({ success: false, err});
        return res.status(200).json({
            success: true
        });
    });
});

// login
app.post('/api/users/login', (req, res) => {

    User.findOne({email : req.body.email}, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "입력된 이메일에 해당되는 유저가 없습니다."
            });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."});

            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);

               res.cookie("token_auth", user.token)
               .status(200)
               .json({ loginSuccess: true, userId: user._id});
            });
        });
    });
});

// logout
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id: req.user._id}, {token: ""}, (err, user) => {
        if(err) return res.json({ success: false, err});

        return res.cookie("token_auth","").status(200).json({
            success: true
        });
    });
});

// delete
app.get('/api/users/delete', auth, (req, res) => {
    //User.findOneAndRemove
    /*
    User.findOne({email : req.body.email}, (err, user) => {

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."});
            
            console.log('비밀번호 일치');
        });

    });
    */
   res.send('delete');
});


// auth
app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({ 
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});