import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function LandingPage(props) {
    
    const onClickAdminHandler = () => {
        props.history.push('/admin');
    }

    const onClickRegisterHandler = () => {
        props.history.push('/register');
    }

    const onClickLoginHandler = () => {
        props.history.push('/login');
    }

    const onClickLogoutHandler = () => {
        axios.get('/api/users/logout')
            .then(res => {
                if (res.data.success) {
                    console.log('logout : ', res.data);
                    props.history.push('/login');
                } else {
                    alert('Fail Logout');
                }
            });
    }

    const onClickMypageHandler = () => {
        props.history.push('/mypage');
    }
    
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <div style={{ display: 'block'}}>
                Home Page
                <br /><br />
                <button onClick={onClickRegisterHandler}>
                    Register
                </button>
                
                <br /><br />
                <button onClick={onClickLoginHandler}>
                    Login
                </button>

                <br /><br />
                <button onClick={onClickLogoutHandler}>
                    Logout
                </button>

                <br /><br />
                <button onClick={onClickMypageHandler}>
                    Mypage
                </button>

                <br /><br />
                <button onClick={onClickAdminHandler}>
                    Admin
                </button>
            </div>
        </div>
    )
}

export default withRouter(LandingPage)
