import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  MenuItem,
  IconButton,
  Container,
  Menu,
  Button,
  Grid,
  Collapse,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [subNavOpen, setSubNavOpen] = useState(false); // State to control sub-navbar visibility

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      // If the clicked tab is already active, toggle the sub-navbar
      setSubNavOpen(!subNavOpen);
      if (subNavOpen) {
        setActiveTab('');
        setSubcategories([]);
      }
    } else {
      setActiveTab(tab);
      setSubNavOpen(true);
      // Define subcategories for each main tab
      const subcats = {
        Men: ['Top-Sellers', 'New Arrivals', 'Topwear', 'Bottomwear'],
        Women: ['Top-Sellers', 'New Arrivals','Topwear','Bottomwear'],
        Kids: ['Top-Sellers', 'New Arrivals','Topwear', 'Bottomwear'],
      };
      setSubcategories(subcats[tab] || []);
    }
  };

  const handleSubNavMouseLeave = () => {
    setSubNavOpen(false);
    setActiveTab('');
    setSubcategories([]);
  };

  return (
    <Box>
      {/* First AppBar - Main Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            
            {/* Left Section - Tabs with Hover and Active State */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {['Men', 'Women', 'Kids'].map((tab) => (
                  <MenuItem
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    sx={{
                      maxHeight: '50px',
                      borderRadius: '15',
                      color: activeTab === tab ? 'white' : 'black',
                      borderBottom: activeTab === tab ? '2px solid red' : 'none',
                      fontWeight: activeTab === tab ? 'bolder' : 'normal',
                      backgroundColor : activeTab === tab? 'red' : 'transparent',
                      textTransform: 'none',
                      fontWeight: '500',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'white',
                        borderBottom: '2px solid red',
                        fontWeight: 'bolder',
                        backgroundColor: 'red',
                        borderRadius: '30',
                        transition: 'background-color 0.3s ease',
                        
                        
                      },
                    }}
                  >
                    {tab}
                  </MenuItem>
                ))}
              </Box>
            )}

            {/* Center Section - Logo */}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                LOGO
              </Typography>
            </Box>

            {/* Right Section - Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Profile Icon with Menu */}
              <IconButton
                color="inherit"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                keepMounted
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
              </Menu>

              {/* Cart Icon */}
              <IconButton color="inherit" aria-label="cart">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Second Bar - Subcategories with Animation */}
      <Collapse in={subNavOpen} timeout="auto" unmountOnExit>
        <AppBar
          position="static"
          sx={{ backgroundColor: '#f5f5f5', color: '#000', boxShadow: 'none' }}
          onMouseLeave={handleSubNavMouseLeave}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {subcategories.map((subcat) => (
                  <Button
                    key={subcat}
                    sx={{
                      color: 'black',
                      textTransform: 'none',
                      fontWeight: '500',
                      '&:hover': {
                        backgroundColor: '#e0e0e0',
                      },
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    {subcat}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Collapse>

      {/* Mobile View - Subcategories as Dropdown */}
      {activeTab && isMobile && (
        <Collapse in={subNavOpen} timeout="auto" unmountOnExit>
          <Box
            sx={{ backgroundColor: '#f5f5f5', padding: '8px 16px' }}
            onMouseLeave={handleSubNavMouseLeave}
          >
            <Grid container spacing={2}>
              {subcategories.map((subcat) => (
                <Grid item xs={6} sm={4} key={subcat}>
                  <Button
                    fullWidth
                    sx={{
                      color: 'black',
                      textTransform: 'none',
                      fontWeight: '500',
                      justifyContent: 'flex-start',
                      '&:hover': {
                        backgroundColor: '#e0e0e0',
                      },
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    {subcat}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

export default Navbar;
