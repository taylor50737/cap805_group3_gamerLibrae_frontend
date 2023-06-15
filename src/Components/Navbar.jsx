// import { AppBar, Toolbar, Container, Typography, Box, Menu, MenuItem } from "@mui/material"

// import { useState } from 'react';

// const pages = ['Home', 'Top Games', 'New Games'];

// export const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <>
//       <AppBar position='static' sx={{ bgcolor: 'inherit' }}>
//         <Container>
//           <Toolbar>
//             <Typography sx={{ fontFamily: 'Lobster', fontSize: '24px' }}>
//               GamerLibrae
//             </Typography>

//             <Box sx={{ flexGrow: 1 }}>

//               <Menu
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//               >
//                 {pages.map((page) => {
//                   <MenuItem key={page}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 })}

//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </>
//   )
// }

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

const pages = ['Home', 'Top Games', 'New Games'];
const settings = ['Profile', 'Account', 'Logout'];

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

  return (
    <AppBar position='static' sx={{ bgcolor: 'inherit' }}>
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

          {/* Site drop down menu for mobile device */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
            noWrap
            component='a'
            href=''
            sx={{
              ml: 4,
              display: { xs: 'flex', md: 'none' },
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

          {/* Button for desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 2,
                  color: 'white',
                  display: 'block',
                  fontSize: 18,
                  fontWeight: 700,
                  textTransform: 'none',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* Notification */}
            <Tooltip title='View notification'>
              <IconButton sx={{ pr: 2 }}>
                <Badge
                  variant='dot'
                  color='secondary'
                >
                  <FontAwesomeIcon icon={faBell} size='xs' style={{ color: '#FFFFFF' }} />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* Avatar */}
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp'>R</Avatar>
              </IconButton>
            </Tooltip>

            {/* Avatar drop down menu */}
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
