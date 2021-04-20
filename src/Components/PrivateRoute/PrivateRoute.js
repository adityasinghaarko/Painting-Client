import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const emailFromSessionStorage = sessionStorage.getItem("email");
    return (
        <Route
            {...rest}
            render={({ location }) =>
                emailFromSessionStorage ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;