import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/NavBar/Navbar'
import ReadySub from './Components/ReadySub/ReadySub'
import Stats from './Components/Stats/Stats'
import Steps from './Components/Steps/Steps'
import Tool from './Components/Tool/Tool'
import Pricing from './Pricing/Pricing'
import Products from './Components/Products'
import Cart from './Cart'
import {ToastContainer } from 'react-toastify'



const getProducts = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const productsPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState('Products');
  const [cart, setCart] = useState([]);
  

  return (
    <>
    <ToastContainer></ToastContainer>
      <Navbar cart={cart}></Navbar>
      <Hero></Hero>
      <Stats></Stats>

      <Tool></Tool>

      <div className="tabs  gap-3 justify-center mt-4 mb-10">
        <input id='Products' type="radio" name="my_tabs_1" className={`px-10 py-5 tab hover:scale-105 transition-all btn rounded-full ${activeTab === "Products" ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa]' : 'bg-white text-black'} border-none`}aria-label="Products" defaultChecked
          onClick={() => setActiveTab("Products")} />

        <input id='cart' type="radio" name="my_tabs_2" className={`tab px-10 py-5 hover:scale-105 transition-all btn rounded-full ${activeTab === "Cart" ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa]' : 'bg-white text-black'}  border-none`} aria-label={`Cart (${cart.length})`}
          onClick={() => setActiveTab("Cart")} />
      </div>
      {
        activeTab === "Products" && <Products productsPromise={productsPromise} cart={cart} setCart={setCart}></Products>
      }
      {
        activeTab === "Cart" && <Cart cart={cart} setCart={setCart}></Cart>
      }


      

      <Steps></Steps>
      <Pricing></Pricing>
      <ReadySub></ReadySub>
      <Footer></Footer>
    </>
  )
}

export default App
