import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {auth} from '../_actions/user_action';

export default function foo(Component, option, admin = null) {
    // option :
    // null => 아무나 출입 가능 login, register, home
    // false => 로그인했지만, 출입 불가능 login , register
    // true => 로그인한 유저만 출입 가능  mypage, logout
    function AuthenticationCheck (props) {

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch( auth() )
            .then(res => {                  
                // 로그인안한 상태
                if(!res.payload.isAuth){
                    console.log('로그인 하지 않은 상태', res.payload);
                    
                    if(option) { // 로그인 하지 않은 상태에서 로그인이 필요한 영역에 진입할때
                        props.history.push('/login');
                    }

                } else {
                    console.log('로그인 한 상태', res.payload);
                    if(!option) {   // 로그인한 상태에서 로그인이 필요하지 않는 영역에 진입할때
                        props.history.push('/');
                    }
                    if(!res.payload.isAdmin && admin) {  // 로그인한 상태에서 관리자가 아닌데 관리자 영역에 들어갈때
                        props.history.push('/');
                    }
                }
            });
        }, [])
        

        return (
            <Component />
        );
    }

    return AuthenticationCheck;
}