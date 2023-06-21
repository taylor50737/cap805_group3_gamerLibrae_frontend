import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default App;
