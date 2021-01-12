import React from 'react';
import {Tabs,Tab, Col} from 'react-bootstrap';
import General from './General';

const MenuTabs = () => {
    return (
        <>
            <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
                <Tab eventKey="general" title="General">
                    <General />
                </Tab>
                <Tab eventKey="images" title="Images">
                    2
                </Tab>
                <Tab eventKey="templates" title="Templates">
                    3
                </Tab>
            </Tabs>
        </>
    )
}

export default MenuTabs
