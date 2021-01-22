/* eslint-disable react/prop-types */
import React from 'react';
import {auth} from '../firebase/firebase';

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    }, [])

    return (
        <AuthContext.Provider value={{user}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
