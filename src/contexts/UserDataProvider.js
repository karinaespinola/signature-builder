/* eslint-disable react/prop-types */
import React from 'react';

export const UserDataContext = React.createContext();

const UserDataProvider = (props) => {
    const [userData, setUserData] = React.useState({});

    return (
        <UserDataContext.Provider value={{userData, setUserData}}>
            {props.children}
        </UserDataContext.Provider>
    )
}

export default UserDataProvider
