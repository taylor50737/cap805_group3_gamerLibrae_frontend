import './GeneralInquires.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const clickToEmail = (emailAddress) => {
  return <a href={`mailto:${emailAddress}`}>{emailAddress}</a>;
};

const clickToCall = (phoneNo) => {
  return <a href={`tel:${phoneNo}`}>{phoneNo}</a>;
};

const GeneralInquiries = () => {
  return (
    <div className='cs--geninq font-dmsans'>
      <h1 className='cs--geninq--header text-2xl'>General Inquiries</h1>
      <List sx={{ paddingTop: 2 }}>
        <ListItem dense>
          <ListItemIcon>
            <EmailSharpIcon sx={{ color: '#E1E1E1' }} />
          </ListItemIcon>
          <ListItemText
            primary={clickToEmail('852_coders@gmail.com')}
            sx={{
              '& .MuiListItemText-primary': {
                fontFamily: '"DM Sans", sans-serif',
                display: 'inline',
                fontSize: '1rem',
                '& :hover': {
                  color: '#8386f5',
                },
              },
            }}
          />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <LocalPhoneSharpIcon sx={{ color: '#E1E1E1' }} />
          </ListItemIcon>
          <ListItemText
            primary={clickToCall('(999) 999-9999')}
            sx={{
              '& .MuiListItemText-primary': {
                fontFamily: '"DM Sans", sans-serif',
                display: 'inline',
                fontSize: '1rem',
                '& :hover': {
                  color: '#8386f5',
                },
              },
            }}
          />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <LocationOnIcon sx={{ color: '#E1E1E1' }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <a href='https://www.google.com/maps/place/Seneca+Polytechnic+College+Newnham+Campus/@43.7960294,-79.3511721,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d31babbf5ce7:0x5812aa25d9fb9912!8m2!3d43.7960294!4d-79.3485918!16zL20vMDMxcnZq?authuser=0&entry=ttu'>
                1750 Finch Ave E, North York, ON M2J 2X5
              </a>
            }
            sx={{
              '& .MuiListItemText-primary': {
                fontFamily: '"DM Sans", sans-serif',
                display: 'inline',
                fontSize: '1rem',
                '& :hover': {
                  color: '#8386f5',
                },
              },
            }}
          />
        </ListItem>
      </List>
      <iframe
        className='contact--us--map'
        loading='lazy'
        allowFullScreen=''
        src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ51y_qxvT1IkREpn72SWqElg&key=AIzaSyBLkwSozrG0PguA3j3tIECYrmReVzq2wGk'
      ></iframe>
    </div>
  );
};

export default GeneralInquiries;
