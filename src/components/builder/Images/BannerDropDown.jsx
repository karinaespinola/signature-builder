import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import Banner1 from '../../../img/banner-1.png';
import Banner2 from '../../../img/banner-2.png';


const BannerDropDown = () => {
    return (
        <div>
            <DropdownButton id="dropdown-item-button" title="Pick a banner" variant="primary">
                <Dropdown.ItemText><img src={Banner1}></img></Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default BannerDropDown
