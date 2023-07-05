import {
  Box,
  Container,
  Stack,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  Unstable_Grid2 as Grid,
} from '@mui/material';

import { NavLink } from 'react-router-dom';

const footerColumns = [
  {
    title: 'Games',
    pages: [
      { name: 'Top 10 Games', url: '/search' },
      { name: 'Open World', url: '/search' },
      { name: 'Action', url: '/search' },
      { name: 'RPG', url: '/search' },
    ],
  },
  {
    title: 'Member',
    pages: [
      { name: 'Register', url: '/auth' },
      { name: 'Profile', url: '/profile/u1' },
      { name: 'Account', url: '/member/:uid' },
    ],
  },
  {
    title: 'Contact',
    pages: [
      { name: 'About us', url: '/about-us' },
      { name: 'Contact', url: '/contact-us' },
    ],
  },
  {
    title: 'Social Media',
    pages: [
      { name: 'Facebook', url: '' },
      { name: 'Instagram', url: '' },
      { name: 'Youtube', url: '' },
    ],
  },
];

export const Footer = () => {
  return (
    <Box
      sx={{
        mt: 'auto',
      }}
    >
      <Container>
        <Divider sx={{ borderColor: '#81838c', borderBottomWidth: 2 }} />
        <Grid container columns={{ xs: 12, md: 15 }}>
          {/* Site icon and copyright */}
          <Grid xs={12} md={3}>
            <Stack
              direction={{ xs: 'row', md: 'column' }}
              spacing={{ xs: 1, md: 0 }}
              sx={{ pt: 2 }}
            >
              <Typography sx={{ fontFamily: 'Lobster', fontSize: 24, fontWeight: 800 }}>
                GamerLibrae
              </Typography>

              <Typography sx={{ fontSize: 12, pt: 1.5, fontWeight: 400 }}>
                ©2023 GamerLibrae
              </Typography>
              <Typography sx={{ fontSize: 12, pt: 1.5, fontWeight: 400 }}>
                All Rights Reserved
              </Typography>
            </Stack>
          </Grid>

          {/* All footer column */}

          {footerColumns.map((col) => (
            <Grid key={col.title} xs={6} md={3}>
              <List disablePadding>
                <ListItem disablePadding disableGutters sx={{ mt: 2 }}>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 22 }}>
                        {col.title}
                      </Typography>
                    }
                  />
                </ListItem>

                {/* Items in individual column */}
                {col.pages.map((page) => (
                  <ListItem key={page.name} disablePadding disableGutters>
                    <ListItemText
                      primary={
                        <NavLink to={page.url}>
                          <Typography
                            sx={{
                              fontFamily: 'DM Sans',
                              color: '#96979e',
                              fontSize: 16,
                              ':hover': { color: '#8386f5' },
                            }}
                          >
                            {page.name}
                          </Typography>
                        </NavLink>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
