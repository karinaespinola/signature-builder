import React from 'react';
import {Tabs,Tab} from 'react-bootstrap';

const MenuTabs = () => {
    return (
        <>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    1
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    2
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    3
                </Tab>
            </Tabs>
        </>
    )
}

export default MenuTabs
