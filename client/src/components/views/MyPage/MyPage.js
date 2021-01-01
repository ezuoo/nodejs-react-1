import React, { useState } from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios';

function MyPage(props) {
    const rootId = 'root'
    const btId = 'button';
    const formId = 'form';

    const [Password, setPassword] = useState("");

    // to Home
    const onClickHomeHandler = () => {
        props.history.push('/');
    }

    // do delete action
    const onClickDeleteHandler = () => {
        document.getElementById(btId).style.visibility = 'hidden';
        document.getElementById(formId).style.visibility = 'visible';
        axios.get('/api/users/delete')
             .then( res => console.log(res.data));
    }

    const onChangeHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = () => {
        alert('submit');
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
            flexDirection: 'column', width: '100%', height: '100vh'
        }}>
            <div id = {btId} style={{position: 'absolute'}}>
                MyPage
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
