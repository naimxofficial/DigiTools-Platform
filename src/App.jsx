import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/NavBar/Navbar'
import ReadySub from './Components/ReadySub/ReadySub'
import Stats from './Components/Stats/Stats'
import Steps from './Components/Steps/Steps'
import Pricing from './Pricing/Pricing'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Stats></Stats>

    <Steps></Steps>
    <Pricing></Pricing>
    <ReadySub></ReadySub>
    </>
  )
}

export default App
