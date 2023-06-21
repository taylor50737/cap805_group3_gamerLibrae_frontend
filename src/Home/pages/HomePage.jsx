import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>
        <i className='fa-solid fa-hand' /> Hi 852_code_9
      </h1>
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
      </div> */}
      
      {/* Quick test for router */}
      <Link to={'dwqdqdqw'}>dwqdqdqw</Link>
      <br/>
      <Link to={'game/123'}>game/123</Link>
      <br/>
      <Link to={'game/123/reviewEdit'}>game/123/reviewEdit</Link>
      <br/>
      <Link to={'adminPanel'}>adminPanel</Link>
    </>
  );
};

export default HomePage;
