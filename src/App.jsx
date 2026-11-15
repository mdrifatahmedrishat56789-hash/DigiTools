import './App.css'
import Navber from './Components/Navber'
import Banner from './Components/Banner/banner'
import Stats from './Components/Banner/Stats/Stats'

function App() {
  return (
    <div className='container mx-auto'>
      <Navber></Navber>

    <Banner></Banner>

    <Stats></Stats>

    </div>
  )
}

export default App

