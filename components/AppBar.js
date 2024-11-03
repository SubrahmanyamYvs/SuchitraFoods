import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const ResponsiveAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElProfile, setAnchorElProfile] = useState(null);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleOpenProfileMenu = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setAnchorElProfile(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Suchitra Foods
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="nav-menu"
              aria-haspopup="true"
              onClick={handleOpenDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleCloseDrawer}>
              <List sx={{ width: 250 }}>
                <ListItem button onClick={handleCloseDrawer}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={handleCloseDrawer}>
                  <ListItemText primary="Products" />
                </ListItem>
                <ListItem button onClick={handleCloseDrawer}>
                  <ListItemText primary="About Us" />
                </ListItem>
              </List>
            </Drawer>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              fontSize: '1.3rem',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Suchitra Foods
          </Typography>

          {/* Desktop Nav Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component="a" href="/products">
              Products
            </Button>
            <Button color="inherit" component="a" href="/about">
              About Us
            </Button>
          </Box>

          {/* Icons for Add to Cart and Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" color="inherit">
              <ShoppingCartIcon />
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenProfileMenu}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={anchorElProfile}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElProfile)}
              onClose={handleCloseProfileMenu}
            >
              <MenuItem onClick={handleCloseProfileMenu}>Profile</MenuItem>
              <MenuItem onClick={handleCloseProfileMenu}>Orders</MenuItem>
              <MenuItem onClick={handleCloseProfileMenu}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
