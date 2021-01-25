/* eslint-disable react/prop-types */
import React from 'react';
import Builder from '../builder/Builder';
import Preview from '../preview/Preview';
import {Row, Col} from 'react-bootstrap';
import {AuthContext} from '../../contexts/AuthProvider';
import {Redirect, withRouter} from 'react-router-dom';

const Dashboard = (props) => {
   const {user} = React.useContext(AuthContext);
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
       console.log(user);
        if(user === null) {
            props.history.push('/login');
        }
        else {
            setLoading(false);
        }
   }, [user])

    return (
        <>
        {
            user !== null && loading === false 
            ?(
            <Row>
                <Col xs={12} sm={12} md={12} lg={7} className="mb-5">              
                    <Builder />                      
                </Col>
                <Col xs={12} sm={12} md={12} lg={5}>
                    <Preview />
                </Col>
            </Row>
            )
            : <p>Loading...</p>
        }

        </>
    );
}

export default withRouter(Dashboard);
