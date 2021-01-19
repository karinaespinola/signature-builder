import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import 'firebase/database';
import {storage, database} from '../../../firebase/firebase';


const BannerDropDown = () => {
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

    return (
        <div>
            <DropdownButton id="dropdown-item-button" title="Pick a banner" variant="primary" className="banner-dropdown" size="lg">
                <Dropdown.Item as="button" eventKey="none">
                    None
                </Dropdown.Item>
                {
                    banners.map((banner) => 
                        (
                            <Dropdown.Item as="button" key={banner.id} eventKey={banner.id}>
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
