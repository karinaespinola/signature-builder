import React from 'react';
import './scss/custom.scss';
import Navigation from './components/navigation/Navigation';
import Builder from './components/builder/Builder';
import {Container, Row, Col} from 'react-bootstrap';
import Preview from './components/preview/Preview';
import UserDataProvider from './contexts/UserDataProvider';

function App() {
  return (
    <>
      <Navigation />
      <UserDataProvider>
        <Container className="signature-builder">
          <Row>
            <Col xs={12} sm={12} md={12} lg={7} className="mb-5">              
                <Builder />                      
            </Col>
            <Col xs={12} sm={12} md={12} lg={5}>
                <Preview />
            </Col>
          </Row>
        </Container>
      </UserDataProvider>
    </>
  );
}

export default App;
