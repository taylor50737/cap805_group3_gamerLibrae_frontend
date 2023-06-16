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

const footerColumns = [
  { name: 'Games', pages: ['Top 10 Games', 'Open World', 'Action', 'RPG'] },
  { name: 'Member', pages: ['Register', 'Profile', 'Account'] },
  { name: 'Contact', pages: ['About us', 'Contact'] },
  { name: 'Social Media', pages: ['Facebook', 'Instagram', 'Youtube'] },
];

export const Footer = () => {
  return (
    <Box sx={{
      mt: 'auto'
    }}>
      <Container>
        <Divider sx={{ borderColor: '#81838c', borderBottomWidth: 2 }} />
        <Grid container columns={{ xs: 12, md: 15 }}>
          {/* Site icon and copyright */}
          <Grid xs={12} md={3}>
            <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 0 }} sx={{ pt: 2 }}>
              <Typography sx={{ fontFamily: 'Lobster', fontSize: 24, fontWeight: 800}}>
                GamerLibrae
              </Typography>
              
              <Typography sx={{ fontSize: 12, pt: 1.5, fontWeight: 400 }}>
                ©2023 GamerLibrae
              </Typography>
              <Typography sx={{ fontSize: 12, pt: 1.5, fontWeight: 400}}>
                All Rights Reserved
              </Typography>
            </Stack>
          </Grid>

          {/* All footer column */}

          {footerColumns.map((col) => (
            <Grid key={col.name} xs={6} md={3}>
              <List disablePadding>
                <ListItem disablePadding disableGutters sx={{ mt: 2 }}>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: 800, fontSize: 18 }}>{col.name}</Typography>
                    }
                  />
                </ListItem>

                {/* Items in individual column */}
                {col.pages.map((page) => (
                  <ListItem key={page} disablePadding disableGutters>
                    <ListItemText
                      primary={
                        <Typography sx={{ color: '#96979e', fontSize: 10 }}>{page}</Typography>
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
