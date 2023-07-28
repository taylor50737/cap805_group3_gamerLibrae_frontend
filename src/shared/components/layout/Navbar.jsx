import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Badge,
  Tooltip,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Modal,
  Paper,
  CircularProgress,
} from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faUser,
  faMagnifyingGlass,
  faAddressCard,
  faPhone,
  faCircleNodes,
} from '@fortawesome/free-solid-svg-icons';

import SearchBox from './SearchBox';
import useAuth from '../../hooks/useAuth';

const pages = [
  {
    name: 'About Us',
    icon: <FontAwesomeIcon icon={faAddressCard} size='lg' style={{ color: '#ffffff' }} />,
    url: '/about-us',
  },
  {
    name: 'Contact Us',
    icon: <FontAwesomeIcon icon={faPhone} size='lg' style={{ color: '#ffffff' }} />,
    url: '/contact-us',
  },
  {
    name: 'Affiliation',
    icon: <FontAwesomeIcon icon={faCircleNodes} size='lg' style={{ color: '#ffffff' }} />,
    url: '/affiliation-rule',
  },
];

export const Navbar = () => {
  const { userName, loggedIn, admin, loading, handleLogout, userId, avatar } = useAuth();
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const publicSettings = [
    { id: 1, name: 'Sign in', url: '/auth' },
    { id: 2, name: 'Forgot Password', url: '/auth/forgot-password' },
  ];

  const memberSettings = [
    { id: 1, name: 'Member Panel', url: `/member/${userId}` },
    { id: 2, name: 'Wishlist', url: `/member/${userId}/wishlist` },
    { id: 3, name: 'Change Info', url: `/member/${userId}/change-info` },
    { id: 4, name: 'Change Password', url: `/member/${userId}/change-password` },
    { id: 5, name: 'Upload Profile Picture', url: `/member/${userId}/upload-profile-pic` },
  ];

  const adminSettings = [
    { id: 1, name: 'Admin Panel', url: '/admin-panel' },
    { id: 2, name: 'Member Panel', url: `/member/${userId}` },
    { id: 3, name: 'Wishlist', url: `/member/${userId}/wishlist` },
    { id: 4, name: 'Change Info', url: `/member/${userId}/change-info` },
    { id: 5, name: 'Change Password', url: `/member/${userId}/change-password` },
    { id: 6, name: 'Upload Profile Picture', url: `/member/${userId}/upload-profile-pic` },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setNavDrawerOpen(open);
  };

  const gameSiteIcon = (linkStyle, typoStyle) => (
    <NavLink to='/' style={{ ...linkStyle, alignItems: 'center' }}>
      <Typography
        noWrap
        sx={{
          ...typoStyle,
          fontFamily: 'Lobster',
          fontWeight: 700,
          letterSpacing: '.05rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        GamerLibrae
      </Typography>
    </NavLink>
  );

  const memberUI = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Notification */}
      {/* {loggedIn && (
        <Tooltip title='View notification'>
          <IconButton sx={{ pr: '4px' }}>
            <Badge variant='dot' color='secondary'>
              <FontAwesomeIcon icon={faBell} size='xs' style={{ color: '#FFFFFF' }} />
            </Badge>
          </IconButton>
        </Tooltip>
      )} */}

      {/* Avatar */}
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {loading ? (
            <CircularProgress sx={{ color: 'gray' }} />
          ) : loggedIn ? (
            <Avatar src={avatar} alt={loggedIn ? userName : 'Visitor'} />
          ) : (
            <FontAwesomeIcon icon={faUser} style={{ color: '#ffffff' }} />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );

  const navDrawerList = (
    <Box sx={{ width: '200px' }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: '20px',
          pb: '10px',
        }}
      >
        {gameSiteIcon({}, { fontSize: '28px' })}
      </Box>

      <Divider variant='middle' sx={{ borderBottomWidth: '1px', borderColor: 'white' }} />
      <List>
        {pages.map((page, i) => (
          <ListItem key={i} disablePadding>
            <NavLink to={page.url}>
              <ListItemButton>
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText primary={page.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position='static' style={{ backgroundColor: 'transparent' }}>
      <Container>
        <Toolbar disableGutters>
          {/* Dekstop Site icon */}
          {gameSiteIcon({}, { fontSize: '24px', display: { xs: 'none', sm: 'none', md: 'flex' } })}

          {/* Desktop pages navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'none', md: 'flex' },
            }}
          >
            {pages.map((page, i) => (
              <NavLink to={page.url} key={i}>
                <Button
                  sx={{
                    my: 2,
                    mx: 0.5,
                    color: 'white',
                    flex: 'none',
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: 0.1,
                    fontFamily: 'DM Sans',
                    textTransform: 'none',
                    ':hover': {
                      color: '#8386f5',
                    },
                  }}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
            <SearchBox fullWidth={false} marginLeft={'8px'} />
          </Box>

          {/* Desktop member UI */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            {memberUI}
          </Box>

          {/* Mobile */}
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex', md: 'none' },
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Left side */}
            <Box sx={{ display: 'flex', gap: '8px' }}>
              {/* Drop down menu icon */}
              <IconButton onClick={toggleDrawer(true)} color='inherit'>
                <FontAwesomeIcon icon={faBars} />
              </IconButton>

              {/* Site icon */}
              {gameSiteIcon({ display: 'flex' }, { fontSize: '24px' })}
            </Box>

            {/* Right side */}
            <Box sx={{ display: 'flex', gap: '8px' }}>
              {/* Search Button */}
              <IconButton
                sx={{ alignSelf: 'center' }}
                onClick={() => {
                  setMobileSearchOpen(true);
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#b8bab9' }} />
              </IconButton>
              {memberUI}
            </Box>
          </Box>

          {/* Avatar drop down menu */}
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            disableScrollLock={true}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {(loggedIn ? (admin ? adminSettings : memberSettings) : publicSettings).map(
              (setting) => (
                <NavLink to={setting.url} key={setting.id}>
                  <MenuItem id={setting.id} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting.name}</Typography>
                  </MenuItem>
                </NavLink>
              ),
            )}
            {loggedIn && (
              <MenuItem
                onClick={() => {
                  handleLogout();
                  handleCloseUserMenu();
                }}
              >
                Logout
              </MenuItem>
            )}
          </Menu>

          {/* Mobile navagation drawer */}
          <Drawer
            anchor='left'
            open={navDrawerOpen}
            onClose={toggleDrawer(false)}
            ModalProps={{ disableScrollLock: true }}
            PaperProps={{
              sx: {
                backgroundColor: '#22252e',
                color: 'white',
              },
            }}
          >
            {navDrawerList}
          </Drawer>

          <Modal
            open={mobileSearchOpen}
            onClose={() => {
              setMobileSearchOpen(false);
            }}
          >
            <Paper
              sx={{
                position: 'absolute',
                top: '10%',
                left: '50%',
                transform: 'translate(-50%, -5%)',
                height: '555px',
                width: '90%',
                bgcolor: '#262729',
                boxShadow: 24,
                p: '8px',
              }}
            >
              <SearchBox fullWidth={true} resultBoxHeight={'500px'} />
            </Paper>
          </Modal>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
