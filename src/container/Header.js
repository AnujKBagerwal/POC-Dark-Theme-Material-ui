import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeController from './Home/controller';
import Feature from './Trending';
import Price from './Cart';

import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import UserModal from '../constain/user/UserModal';

import { Paper, Button, Menu, MenuItem, Switch as SW } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserModalMaterial from '../constain/user/UserModalMaterial';

const Header = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState('');
  const [userDetails, setUserDetails] = useState({});
  let history = useHistory();

  // if there is any user Logged in Already
  useEffect(() => {
    if (localStorage.getItem('loggedUser')) {
      const LocName = JSON.parse(localStorage.getItem('loggedUser'));
      setUserName(LocName.firstName + LocName.lastName);
      setUserDetails(LocName);
    }
  }, []);

  const handleClose = () => {
    setModal(!modal);
  };

  const handleUser = () => {
    setUser(!user);
  };

  // if user Logging successfully it store user in local storage too.
  const handleUserDetails = (value) => {
    localStorage.setItem('loggedUser', JSON.stringify(value));
    setUser(!user);
    setUserName(value.firstName + value.lastName);
  };

  console.log(userName);
  return (
    <div>
      {/* Paper is to implement dark/Light mode */}
      <Paper style={{ height: '100vh' }}>
        <Navbar bg={theme} variant={theme}>
          <Navbar.Brand onClick={() => history.push('/home')}>
            Shop
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Button onClick={() => history.push('/home')}>Home</Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClose}
            >
              Trending
            </Button>
            <Button onClick={() => history.push('/cart')}>Cart</Button>
          </Nav>
          <div>
            <Menu keepMounted open={modal} onClose={handleClose}>
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push('/home/mobiles');
                }}
              >
                Mobile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push('/home/books');
                }}
              >
                Books
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push('/trending');
                }}
              >
                suit
              </MenuItem>
            </Menu>
          </div>
          <Form inline>
            <div style={{ marginRight: '10px' }}>
              <Brightness4Icon />
              <SW
                checked={theme === 'dark' ? true : false}
                onChange={() =>
                  theme === 'dark' ? setTheme('light') : setTheme('dark')
                }
                name="Toggle Mode"
              />
              <NightsStayIcon />
            </div>
            {userName ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  value={user}
                  onClick={handleUser}
                  startIcon={<AccountCircleIcon style={{ fontSize: '30px' }} />}
                >
                  {userName}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: '20px' }}
                  onClick={() => {
                    localStorage.clear();
                    setUserName('');
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                size="small"
                value={user}
                onClick={handleUser}
                startIcon={<AccountCircleIcon style={{ fontSize: '30px' }} />}
              >
                Login
              </Button>
            )}
          </Form>
        </Navbar>

        {user && (
          <UserModalMaterial
            modal={user}
            handleUser={handleUser}
            userDetails={userDetails}
            handleUserDetails={handleUserDetails}
          />
        )}

        {/* Created Routing for Dashboard we can access in whole project it is for Header section  */}
        <Switch>
          <Route path="/home" component={HomeController} />
          <Route path="/trending" component={Feature} exact />
          <Route path="/cart" component={Price} exact />
          <Redirect to="/home" from="/" />
        </Switch>
      </Paper>
    </div>
  );
};

export default Header;
