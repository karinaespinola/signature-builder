import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import Banner1 from '../../../img/banner-1.png';
import Banner2 from '../../../img/banner-2.png';
import {storage} from '../../../firebase/firebase';

const BannerDropDown = () => {
    const [banners, setBanners] = React.useState([]);

    React.useEffect(() => {
        let newArray = [];

        storage
        .ref("banners")
        .listAll()
        .then(function(res) {
            res.items.forEach(function(itemRef) {
                itemRef.getDownloadURL()
                .then((url) => {
                    console.log(url)
                    newArray.push(url);
                })
                .catch((error) => console.log(error))            
            });
            setBanners(newArray);
          }).catch(function(error) {
            console.log(error);
          });
          
    }, [])
    return (
        <div>
            <DropdownButton id="dropdown-item-button" title="Pick a banner" variant="primary" className="banner-dropdown" size="lg">
                <Dropdown.Item as="button" eventKey="none">
                    None
                </Dropdown.Item>
                <Dropdown.Item as="button" eventKey="1">
                    <img src={Banner1}></img>
                </Dropdown.Item>
                <Dropdown.Item as="button" eventKey="2">
                    <img src={Banner2}></img>
                </Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default BannerDropDown
