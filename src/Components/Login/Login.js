import React, {useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebaseConfig from './firebaseConfig';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [signedInUser, setSignedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(undefined)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var user = result.user;
                var { displayName, email } = result.user;

                fetch(`https://glacial-inlet-59026.herokuapp.com/checkAdmin?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                        setIsAdmin(data)
                        sessionStorage.setItem('isAdmin', data);
                    })
                
                const signedInUser = {
                    name: displayName,
                    email: email,
                    isAdmin : isAdmin
                }
                

                setSignedInUser(signedInUser);
                sessionStorage.setItem('email', email)
                sessionStorage.setItem('name', displayName)
                storeAuthToken()

                alert("Signed In as " + signedInUser.name)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // ...
            });

        const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
                .then(function (idToken) {
                    sessionStorage.setItem('token', idToken)

                }).catch(function (error) {
                    // Handle error
                });
        }
    }

    const buttonStyle = {
        borderRadius: "15px",
        padding: "10px"
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={googleSignIn} style={buttonStyle}> Continue with Google</button>
        </div>
    );
};

export default Login;