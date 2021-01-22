import React from 'react';
import './scss/custom.scss';
import Navigation from './components/navigation/Navigation';
import Dashboard from './components/dashboard/Dashboard';
import {Container, Row, Col} from 'react-bootstrap';
import UserDataProvider from './contexts/UserDataProvider';
import firebase, {auth} from './firebase/firebase';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/login/Login';
import AuthProvider from './contexts/AuthProvider';

function App() {
  React.useEffect(() => {

  }, [])
  return (
    <>
      <AuthProvider>
        <Router>
          <UserDataProvider>
              <Navigation />
              <Container className="signature-builder">
                <Switch>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                </Switch>
              </Container>
            </UserDataProvider>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
