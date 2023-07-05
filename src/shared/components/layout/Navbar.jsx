import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
  Tooltip,
  Badge,
  IconButton,
} from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SearchBox from './SearchBox';
import { AuthContext } from '../../context/auth_context';

const pages = [
  { id: 1, name: 'About Us', url: '/about-us' },
  { id: 2, name: 'Contact Us', url: '/contact-us' },
  { id: 3, name: 'Affiliation', url: '/affiliation-rule' },
];

const publicSettings = [
  { id: 1, name: 'Authenticate', url: '/auth' },
  { id: 2, name: 'Forget Password', url: '/auth/forget-password' },
];
const memberSettings = [
  { id: 1, name: 'Member Panel', url: '/member/u2' },
  { id: 2, name: 'Wishlist', url: '/member/u2/wishlist' },
  { id: 3, name: 'Change Password', url: '/member/u2/change-password' },
  { id: 4, name: 'Upload Profile Picture', url: '/member/u2/upload-profile-pic' },
  { id: 5, name: 'Change Info', url: '/member/u2/change-info' },
];
const adminSettings = [
  { id: 1, name: 'Admin Panel', url: '/admin-panel' },
  { id: 2, name: 'Member Panel', url: '/member/u1' },
  { id: 3, name: 'Wishlist', url: '/member/u1/wishlist' },
  { id: 4, name: 'Change Password', url: '/member/u1/change-password' },
  { id: 5, name: 'Upload Profile Picture', url: '/member/u1/upload-profile-pic' },
  { id: 6, name: 'Change Info', url: '/member/u1/change-info' },
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  const auth = useContext(AuthContext);

  return (
    <AppBar position='static' style={{ backgroundColor: 'transparent' }}>
      <Container>
        <Toolbar disableGutters>
          {/* Site icon for dekstop */}
          <NavLink to='/'>
            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
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

          {/* Button for desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <NavLink to={page.url} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
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
            <SearchBox />
          </Box>

          {/* Site drop down menu for mobile device */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            <NavLink to='/'>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            </NavLink>
            <Menu
              id='menu-appbar'
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <NavLink to={page.url} key={page.id}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page.name}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>

          {/* Site icon for mobile device */}
          <NavLink to='/'>
            <Typography
              variant='h5'
              sx={{
                ml: 12,
                display: { xs: 'flex', sm: 'flex', md: 'none' },
                flexGrow: 1,
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

          <Box
            sx={{
              display: { xs: 'inline-block', sm: 'inline-block', md: 'none' },
              flexGrow: 6,
            }}
          >
            <SearchBox />
            {/* {isSearch ? (
                <SearchBox />
              ) : (
                <IconButton onClick={() => {console.log(isSearch); setIsSearch(!isSearch)}}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size='lg'
                    style={{ color: '#ffffff' }}
                  />
                </IconButton>
              )} */}
          </Box>

          {/* Public */}
          {!auth.isLoggedIn && !auth.isAdminLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              {/* Avatar */}
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Member'>
                    <i className='fa-solid fa-user' />
                  </Avatar>
                </IconButton>
              </Tooltip>

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
                {publicSettings.map((setting) => (
                  <NavLink to={setting.url} key={setting.id}>
                    <MenuItem id={setting.id} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting.name}</Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>
          )}

          {/* Member */}
          {auth.isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              {/* Notification */}
              {/* <Tooltip title='View notification'>
                <IconButton sx={{ pr: 2 }}>
                  <Badge variant='dot' color='secondary'>
                    <FontAwesomeIcon icon={faBell} size='xs' style={{ color: '#FFFFFF' }} />
                  </Badge>
                </IconButton>
              </Tooltip> */}

              {/* Avatar */}
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    src='https://robohash.org/nisiiustoomnis.png?size=50x50&set=set1'
                    alt='mwinsom3'
                  />
                </IconButton>
              </Tooltip>

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
                {memberSettings.map((setting) => (
                  <NavLink to={setting.url} key={setting.id}>
                    <MenuItem id={setting.id} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting.name}</Typography>
                    </MenuItem>
                  </NavLink>
                ))}
                <a href='/'>
                  <MenuItem>Logout</MenuItem>
                </a>
              </Menu>
            </Box>
          )}

          {/* Admin */}
          {auth.isAdminLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              {/* Notification */}
              {/* <Tooltip title='View notification'>
                <IconButton sx={{ pr: 2 }}>
                  <Badge variant='dot' color='secondary'>
                    <FontAwesomeIcon icon={faBell} size='xs' style={{ color: '#FFFFFF' }} />
                  </Badge>
                </IconButton>
              </Tooltip> */}

              {/* Avatar */}
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt='Admin'
                    src='https://robohash.org/etimpeditcorporis.png?size=50x50&set=set1'
                  />
                </IconButton>
              </Tooltip>

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
                {adminSettings.map((setting) => (
                  <NavLink to={setting.url} key={setting.id}>
                    <MenuItem id={setting.id} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting.name}</Typography>
                    </MenuItem>
                  </NavLink>
                ))}
                <a href='/'>
                  <MenuItem>Logout</MenuItem>
                </a>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
