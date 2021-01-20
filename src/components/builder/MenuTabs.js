import React from 'react';
import {Tabs,Tab, Col} from 'react-bootstrap';
import General from './General';
import Templates from './Templates/Templates';
import Images from './Images/Images';
import {UserDataContext} from '../../contexts/UserDataProvider';
import Social from './Social';

const MenuTabs = () => {
    const {userData, updateUserData} = React.useContext(UserDataContext);

    return (
        <>
            <Tabs
            defaultActiveKey={userData.menuTab} 
            activeKey={userData.menuTab} 
            id="menu-tabs"
            onSelect={(key) => updateUserData({...userData, menuTab: key})}
            className="mb-5"
            >
                <Tab eventKey="templates" title="Templates">
                    <Templates />
                </Tab>
                <Tab eventKey="general" title="General">
                    <General />
                </Tab>
                <Tab eventKey="images" title="Images">
                    <Images />
                </Tab>
                <Tab eventKey="social" title="Social">
                    <Social/>
                </Tab>
            </Tabs>
        </>
    )
}

export default MenuTabs
