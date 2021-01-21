import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import 'firebase/database';
import {database} from '../../../firebase/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {UserDataContext} from '../../../contexts/UserDataProvider';


const BannerDropDown = () => {
    const {userData, updateUserData} = React.useContext(UserDataContext);
    const [banners, setBanners] = React.useState([]);

    React.useEffect(() => {
        getBanners();    
    }, [])

    const getBanners = () => {
        let _records = [];
        database.collection("banners").get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                _records.push({id: doc.id, ...doc.data()});
            });
            setBanners(_records);
        });       
    }

    const handleBannerClick = (bannerId) => {
        let filteredElements = banners.filter((banner) => {
            return banner.id === bannerId;
        })
        if(filteredElements.length > 0) {
            updateUserData({...userData, bannerUrl : filteredElements[0].url, customBanner: false});
        }
        else {
            updateUserData({...userData, bannerUrl : null, customBanner: false});
        }       
    }

    return (
        <div>
            <DropdownButton id="dropdown-item-button" title="Pick a banner" variant="primary" className="banner-dropdown">
                <Dropdown.Item 
                as="button" 
                eventKey="none"
                onClick={(e) => {handleBannerClick('none')}}
                >
                    None
                </Dropdown.Item>
                {
                    banners.map((banner) => 
                        (
                            <Dropdown.Item 
                            as="button" 
                            key={banner.id} 
                            eventKey={banner.id}
                            onClick={(e) => {handleBannerClick(banner.id)}}
                            >
                                <img src={banner.url}></img>
                            </Dropdown.Item>
                        )
                    )
                }
            </DropdownButton>
        </div>
    )
}

export default BannerDropDown
