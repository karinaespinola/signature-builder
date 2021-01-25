/* eslint-disable react/prop-types */
import React from 'react';
import {auth} from '../firebase/firebase';
import LabLoader from '../loaders/LabLoader';

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [user, setUser] = React.useState(false);

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                console.log(user);
                setUser(user);
            }
            else {
                setUser(null)
            }            
        });
    }, [])

    
    if(user === false) {
        return (
            <LabLoader />
        )
    }

    return (
        <AuthContext.Provider value={{user}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
