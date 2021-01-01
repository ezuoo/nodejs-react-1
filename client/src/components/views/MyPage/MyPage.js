import React, { useState } from 'react'
import {withRouter} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {deleteUser} from '../../../_actions/user_action';
import {auth} from '../../../_actions/user_action';
import { set } from 'mongoose';

function MyPage(props) {

    const dispatch = useDispatch();
    const btId = 'button';
    const formId = 'form';
    const [Password, setPassword] = useState("");

    let data;
    let user;

    const onClickViewHandler = () => {
        data = dispatch(auth()).then( res => { return res.payload; });

        data.then(value => {user = value;} );

        setTimeout(() => {
            console.log('user : ', user);
        } , 1000);
    }

    // to Home
    const onClickHomeHandler = () => {
        props.history.push('/');
    }

    // input password
    const onChangeHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    // do delete action
    const onClickDeleteHandler = () => {
        document.getElementById(btId).style.visibility = 'hidden';
        document.getElementById(formId).style.visibility = 'visible';
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = { password : Password };
        
        // to _action/user_action    
        dispatch(deleteUser(body))
            .then(res => {
                if(res.payload.deleteSuccess) {
                    props.history.push('/');
                } else {
                    alert('Fail delete user');
                }
            });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
            flexDirection: 'column', width: '100%', height: '100vh'
        }}>
            <div id = {btId} style={{position: 'absolute'}}>
                MyPage
                <br /><br />
                <button onClick={onClickViewHandler}>
                    View
                </button>
                <br /><br />
                <button onClick={onClickDeleteHandler}>
                    Delete
                </button>
                <br /><br />
                <button onClick={onClickHomeHandler}>
                    Home
                </button>
            </div>

            <br /><br />
            <form id={formId} 
                  style={{ display: 'flex', flexDirection: 'column', visibility: 'hidden', position: 'absolute'  }} 
                  onSubmit={onSubmitHandler}>
                    <label>Password</label>
                    <input type = "password" value = {Password} onChange = {onChangeHandler} />
                    <br />
                    <button>
                        submit
                    </button>
            </form>

        </div>
    )
}

export default withRouter(MyPage)
