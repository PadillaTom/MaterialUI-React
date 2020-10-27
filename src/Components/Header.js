import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Hide on Scroll:
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

const Header = () => {
  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <Typography variant='h4'>Material Ui</Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
