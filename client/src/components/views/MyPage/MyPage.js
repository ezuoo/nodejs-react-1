import React from 'react'
import {withRouter} from 'react-router-dom';
function MyPage(props) {

    const onClickHomeHandler = () => {
        props.history.push('/');
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <div style={{ display: 'block' }}>
                MyPage
                <br />
                <button onClick={onClickHomeHandler}>
                    Home
                </button>
            </div>
        </div>
    )
}

export default withRouter(MyPage)
