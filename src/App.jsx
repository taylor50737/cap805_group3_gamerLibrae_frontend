import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Container } from '@mui/material';
import AdminPanel from './AdminPanel/AdminPanel';

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1 className='text-3xl font-bold underline'><i className='fa-solid fa-hand' /> Hi 852_code_9</h1>
        <div>
          <button>
            <i className='fa fa-pen' /> Write a Review
          </button>
        </div>
        <div>
          <button>
            <i className='fa fa-send' /> Send us a message
          </button>
        </div>
        <div>
          <button>
            <i className='fa fa-user' /> Login
          </button>
        </div>
        <AdminPanel />
      </Container>
      <Footer />
    </>
  );
};

export default App;
