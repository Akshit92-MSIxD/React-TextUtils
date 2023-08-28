import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
    <>
 <Navbar title="TextUtils" about = "About me"/>
 {/* <TextForm heading="Enter the text to analyze below" /> */}
       <About/>
  </>
      
  );
}

export default App;

