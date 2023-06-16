import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Container } from '@mui/material'

const App = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <h1 className="text-3xl font-bold underline">
          Hello 852_code9
        </h1>
      </Container>
      <Footer/>
    </>
  )
}

export default App