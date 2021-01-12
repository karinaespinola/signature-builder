import React from 'react';
import {Tabs,Tab, Col} from 'react-bootstrap';
import General from './General';
import Templates from './Templates/Templates';
import {UserDataContext} from '../../contexts/UserDataProvider';

const MenuTabs = () => {
    const {userData, updateUserData} = React.useContext(UserDataContext);

    return (
        <>
            <Tabs
            defaultActiveKey={userData.menuTab} 
            activeKey={userData.menuTab} 
            id="menu-tabs"
            onSelect={(key) => updateUserData({...userData, menuTab: key})}
            >
                <Tab eventKey="templates" title="Templates">
                    <Templates />
                </Tab>
                <Tab eventKey="general" title="General">
                    <General />
                </Tab>
                <Tab eventKey="images" title="Images">
                    2
                </Tab>

            </Tabs>
        </>
    )
}

export default MenuTabs
