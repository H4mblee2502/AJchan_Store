import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Product from './components/products/Product'
import Navbar from './components/nav/Navbar'
import { FilterProvider } from './context/useContext'

function App() {
  return (
    <FilterProvider>
      <div className="flex flex-col w-full gap-8 px-26 mt-8">
        <Header />
        <Navbar />
        <Product />
        <Footer />
      </div>
    </FilterProvider>
  )
}

export default App