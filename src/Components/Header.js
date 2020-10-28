import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Material UI:
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// ::::::::::::::: Hide on Scroll ::::::::::::::::::
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  //   Returns a new version:
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

// ::::::::::::::::::::::: Styles ::::::::::::::::::::::
const useStyles = makeStyles((theme) => ({
  // FOR MAKING MARGIN AFTER APPBAR:
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 100,
    marginLeft: '1.2rem',
  },
  button: {
    borderRadius: '5rem',
    marginLeft: '3rem',
    color: 'white',
    letterSpacing: '1.2px',
  },
}));

// ADD THIS DIV AFTER APPBAR TO COMPLETELY SEPARATE ---->

//::::::::::::::: MAIN ::::::::::::::::
const Header = () => {
  // Styles:
  const classes = useStyles();
  // React Router Dom:
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (e, value) => {
    setSelectedTab(value);
  };
  // Menu and Items :
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setIsOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setIsOpen(false);
  };
  //:::::::::::: Main :::::::::::::::
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar color='transparent' className='appbar'>
          <Toolbar>
            <Typography variant='h5'>Web Development</Typography>
            <Tabs
              className={classes.tabContainer}
              value={selectedTab}
              onChange={handleChange}
              indicatorColor='transparent'
            >
              <Tab
                label='Home'
                className={classes.tab}
                component={Link}
                to='/'
              ></Tab>
              <Tab
                label='Services'
                className={classes.tab}
                component={Link}
                to='/services'
                onMouseOver={(e) => handleClick(e)}
                aria-haspopup={anchorEl ? 'true' : undefined}
                aria-owns={anchorEl ? 'simple-menu' : undefined}
              ></Tab>
              <Tab
                label='About Us'
                className={classes.tab}
                component={Link}
                to='/about'
              ></Tab>
              <Tab
                label='Contact'
                className={classes.tab}
                component={Link}
                to='/contact'
              ></Tab>
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
                component={Link}
                to='/estimate'
              >
                Free Estimate!
              </Button>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                open={isOpen}
                MenuListProps={{ onMouseLeave: handleClose }}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setSelectedTab(1);
                  }}
                  component={Link}
                  to='/services'
                >
                  Services
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setSelectedTab(1);
                  }}
                  component={Link}
                  to='/websitedev'
                >
                  Website Development
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleClose();
                    setSelectedTab(1);
                  }}
                  component={Link}
                  to='/mobiledev'
                >
                  Mobile Apps
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setSelectedTab(1);
                  }}
                  component={Link}
                  to='/softwaredev'
                >
                  Software Development
                </MenuItem>
              </Menu>
            </Tabs>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};

export default Header;
