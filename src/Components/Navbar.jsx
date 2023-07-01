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
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

import SearchBox from './SearchBox';
import { AuthContext } from '../shared/context/auth_context';

const pages = ['Home', 'Top Games'];

const publicSettings = [
  { id: 1, name: 'Authenticate', url: '/auth' },
  { id: 2, name: 'Forget Password', url: '/forget-password' },
];
const memberSettings = [
  { id: 1, name: 'My Profile', url: '/member/u1' },
  { id: 2, name: 'Change Info', url: '/member/u1/change-info' },
  { id: 3, name: 'Reset Password', url: '/member/u1/reset-password' },
  { id: 4, name: 'Upload Profile Pic', url: '/member/u1/upload-profile-pic' },
  { id: 5, name: 'Wishlist', url: '/member/u1/wishlist' },
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
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
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

          {/* Button for desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 2,
                  color: 'white',
                  flex: 'none',
                  fontSize: 18,
                  fontWeight: 800,
                  textTransform: 'none',
                }}
              >
                {page}
              </Button>
            ))}
            <SearchBox />
          </Box>

          {/* Site drop down menu for mobile device */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Site icon for mobile device */}
          <Typography
            variant='h5'
            component='a'
            href=''
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

          <Box
            sx={{
              display: { xs: 'inline-block', sm: 'inline-block', md: 'none' },
              flexGrow: 6,
            }}
          >
            <SearchBox></SearchBox>
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
          {!auth.isLoggedIn && (
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
                  <NavLink to={setting.url}>
                    <MenuItem key={setting.id} id={setting.id} onClick={handleCloseUserMenu}>
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
              <Tooltip title='View notification'>
                <IconButton sx={{ pr: 2 }}>
                  <Badge variant='dot' color='secondary'>
                    <FontAwesomeIcon icon={faBell} size='xs' style={{ color: '#FFFFFF' }} />
                  </Badge>
                </IconButton>
              </Tooltip>

              {/* Avatar */}
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    src='https://i.etsystatic.com/25924315/r/il/b87247/4826173692/il_794xN.4826173692_e7xp.jpg'
                    alt='Remy Sharp'
                  >
                    R
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
                {memberSettings.map((setting) => (
                  <NavLink to={setting.url}>
                    <MenuItem key={setting.id} id={setting.id} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting.name}</Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
