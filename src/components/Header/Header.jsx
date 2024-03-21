import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link} from 'react-router-dom';

const Header = () => {
  const [activeTab, setActiveTab] = useState('');
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Update active tab when a navigation tab is clicked
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: 'rgb(248, 245, 241)', fontFamily: ['Helvetica', 'Arial', 'sans-serif'] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "Times New Roman, Times, serif",
              fontSize: '20px',
              lineHeight: '130%',
              fontWeight: '900',
              color: 'black',
              textDecoration: 'none',
              // fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: activeTab === '' ? '900' : '900' // Apply bold font-weight to active tab
            }}
            onClick={() => handleTabClick('')}
          >
            25 KING WEST
          </Typography>

          {/* Navigation menu for mobile view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              style={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/page/3">
                The History
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/page/4">
                The Renovation
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/page/5">
                The Space
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/page/6">
                Contact
              </MenuItem>
            </Menu>
          </Box>

          {/* Navigation tabs for mobile view */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              ml: 'auto',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              fontWeight: activeTab === '' ? 'bold' : 'normal' // Apply bold font-weight to active tab
            }}
            onClick={() => handleTabClick('')}
          >
            25 King West
          </Typography>

          {/* Navigation tabs for desktop view */}
          <Box sx={{
            display: 'flex', justifyContent: 'space-evenly',
            flexGrow: 1, display: { xs: 'none', md: 'flex' }
          }}>
            <Button
              component={Link}
              to="/page/3"
              sx={{ mx: 1, color: 'black', fontWeight: activeTab === 'history' ? 'bold' : 'normal' }} // Apply bold font-weight to active tab
              onClick={() => handleTabClick('history')}
            >
              The History
            </Button>
            <Button
              component={Link}
              to="/page/4"
              sx={{ mx: 1, color: 'black', fontWeight: activeTab === 'renovation' ? 'bold' : 'normal' }} // Apply bold font-weight to active tab
              onClick={() => handleTabClick('renovation')}
            >
              The Renovation
            </Button>
            <Button
              component={Link}
              to="/page/5"
              sx={{ mx: 1, color: 'black', fontWeight: activeTab === 'space' ? 'bold' : 'normal' }} // Apply bold font-weight to active tab
              onClick={() => handleTabClick('space')}
            >
              The Space
            </Button>
            <Button
              component={Link}
              to="/page/6"
              sx={{ mx: 1, color: 'black', fontWeight: activeTab === 'contact' ? 'bold' : 'normal' }} // Apply bold font-weight to active tab
              onClick={() => handleTabClick('contact')}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
