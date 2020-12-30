import {React, useState} from 'react'
import {useDispatch} from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
function RegisterPage(props) {

    const dispatch = useDispatch();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    // onChangeEvent
    const onNameHandler = function (event){
        setName(event.currentTarget.value);
    }
    const onEmailHandler = function (event){
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = function (event){
        setPassword(event.currentTarget.value);
    }
    const onConfirmPasswordHandler = function (event){
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = function (event) {
        event.preventDefault();
        
        // 유효성 검사
        if (Password !== ConfirmPassword) {
            return alert("비밀번호가 같지 않습니다.");
        }

        let body = {
            name: Name,
            email : Email,
            password : Password
        };
        
        // to _action/user_action
        dispatch(registerUser(body))
            .then(res => {
                if(res.payload.success) {
                    props.history.push('/login');
                } else {
                    alert('Fail register');
                }
            });
    }



    return (
        <div style = {{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
          }}>
            <form style = {{ display: 'flex', flexDirection: 'column'}} onSubmit = { onSubmitHandler }>
                <label>Name</label>
                <input type = "text" value={Name} onChange={ onNameHandler } />
                <label>Email</label>
                <input type = "email" value={Email} onChange={ onEmailHandler } />
                <label>Password</label>
                <input type = "password" value={Password} onChange = { onPasswordHandler } />
                <label>Confirm Password</label>
                <input type = "password" value={ConfirmPassword} onChange={ onConfirmPasswordHandler } />
                <br />
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
