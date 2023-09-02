import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'
// import About from './components/About';


function App() {

const [mode,setMode] = useState('light');

const toggleMode = () =>{
  
  if(mode === 'light')
  {
    setMode('dark');
    document.body.style.backgroundColor = "#042743";
    document.body.style.caretColor = "white";
 
  }
  else
  { 
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.caretColor = "black";
  }
}
  return (
    <>
 <Navbar title="TextUtils" about = "About me" mode={mode} toggleMode={toggleMode}/>
 <TextForm heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode} />
  {/* <About/> */}
  </>
      
  );
}

export default App;

