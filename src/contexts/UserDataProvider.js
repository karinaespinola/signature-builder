/* eslint-disable react/prop-types */
import React from 'react';

export const UserDataContext = React.createContext();

const UserDataProvider = (props) => {
    const [userData, setUserData] = React.useState({});

    React.useEffect(() => {
        let userDataLocal = {
            template : 'jexan',
            menuTab : 'templates'
        }
        if(localStorage.getItem('userData')) {
            userDataLocal = JSON.parse(localStorage.getItem('userData'));
        }
        else {
            localStorage.setItem('userData', JSON.stringify(userDataLocal));
        }
        setUserData(userDataLocal);
    }, []);

    const updateUserData = (data) => {
        localStorage.setItem('userData', JSON.stringify(data));
        setUserData(data);
    }

    return (
        <UserDataContext.Provider value={{userData, updateUserData}}>
            {props.children}
        </UserDataContext.Provider>
    )
}

export default UserDataProvider
