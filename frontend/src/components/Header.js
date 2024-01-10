import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Search', path: '/search' },
  { label: 'Cart', path: '/cart' },
  { label: 'Offers', path: '/offers' },
  { label: 'Help', path: '/help' },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // ... (previous code)

const drawer = (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2, margin: '20px', position: 'relative', textAlign: 'center' }}>
      Foodie
      <IconButton
        color="inherit"
        aria-label="open dropdown"
        onClick={handleMenuClick}
        sx={{ position: 'absolute', right: '-16px', top: '50%', transform: 'translateY(-50%)' }}
      >
        <MenuIcon />
      </IconButton>
    </Typography>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label.toLowerCase()} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

const container = window !== undefined ? () => window().document.body : undefined;

return (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <CssBaseline />
    <AppBar component="nav" sx={{ background: '#FDFDFD' }}>
      <Toolbar>
        <IconButton
          color="black"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#3D4152', margin: '30px' }}
        >
          <b style={{ fontSize: '180%' }}>Foodie</b>
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item.label} component={Link} to={item.path} sx={{ color: '#3D4152', margin: '30px' }}>
              {item.label.toLowerCase()}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
    <Box component="main" sx={{ p: 3, marginTop: '20px' }}>
      <Toolbar />
    </Box>
  </Box>
);

}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
