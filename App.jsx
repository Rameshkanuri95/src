/* eslint-disable no-unused-vars */
import React from 'react';
import About from './components/About';
import Info from './components/Info';
import Interest from './components/Interest';
import Footer from './components/Footer';
import './styles.css'

function App() {
 

  return (
    <div className='businesscard--block'>
      <Info/>
      <About/>
      <Interest/>
      <Footer/>
    </div>
  )
}

export default App
