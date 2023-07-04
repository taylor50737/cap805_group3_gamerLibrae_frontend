import './GeneralInquires.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';

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
            primary='Email: '
            secondary={clickToEmail('852_coders@gmail.com')}
            sx={{
              '& .MuiListItemText-primary': {
                fontFamily: '"DM Sans", sans-serif',
                display: 'inline',
                fontSize: '1.1rem',
              },
              '& .MuiListItemText-secondary': {
                fontFamily: '"DM Sans", sans-serif',
                color: '#FFFFFF',
                display: 'inline',
                fontSize: '1rem',
              },
            }}
          />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <LocalPhoneSharpIcon sx={{ color: '#E1E1E1' }} />
          </ListItemIcon>
          <ListItemText
            primary='Telephone: '
            secondary={clickToCall('(999) 999-9999')}
            sx={{
              '& .MuiListItemText-primary': {
                fontFamily: '"DM Sans", sans-serif',
                display: 'inline',
                fontSize: '1.1rem',
              },
              '& .MuiListItemText-secondary': {
                fontFamily: '"DM Sans", sans-serif',
                color: '#FFFFFF',
                display: 'inline',
                fontSize: '1rem',
              },
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default GeneralInquiries;
