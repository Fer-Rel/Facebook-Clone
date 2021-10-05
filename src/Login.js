import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
//importacion



function Login() {
        const [state,dispatch] = useStateValue();

        const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            })

            
        }).catch((error) => alert(error.message));

    }
    
    return (
        <div className="login">
            <div className="login__logo"
             >
                <img
                src = "https://www.muypymes.com/wp-content/uploads/2018/03/facebook-itunesapple.jpg"
                alt = ""
                />

                <img
                src = "https://geeksroom.com/wp-content/uploads/2019/11/facebook-nuew-logo.gif"

                alt = ""
                />
            </div>
            <Button type = "submit  " onClick={signIn}>
                Sign In

            </Button>
            
        </div>
    )
}

export default Login
