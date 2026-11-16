import './App.css'
import Navber from './Components/Navber'
import Banner from './Components/Banner/banner'
import Stats from './Components/Banner/Stats/Stats'
import Product from './Components/Products/Product'
import Footer from './Components/footer/Footer'
import Steps from './Components/Steps/Steps'
import Transparent from './Components/Transparent/Transparent'
import { Suspense } from 'react'

const fetchProduct = async() =>{
  const res = await fetch("./data.json");
  return res.json();
}





function App() {
  const promiseProduct = fetchProduct()


  return (
    <div className='container mx-auto'>
      <Navber></Navber>

    <Banner></Banner>

    <Stats></Stats>

    <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>
}>

    <Product promiseProduct={promiseProduct}></Product>
    </Suspense>

    




    <Steps></Steps>

    <Transparent></Transparent>
    <Footer></Footer>

    </div>
  )
}

export default App

