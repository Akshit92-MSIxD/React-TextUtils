import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import {useState} from 'react'
// import About from './components/About';


function App() {

const [mode,setMode] = useState('light');

const [alertMessage,setAlertMessage] = useState(null);



// A method that handles showing alerts for just a matter of seconds when any activity is done by the user:)
const showAlert = (Message)=>{

  setAlertMessage(Message);

  setTimeout(() => {
    setAlertMessage(null);
  }, 1500);
}



// method that handles the switch the mode from light to dark or vice versa :)
const toggleMode = () =>{
  
  if(mode === 'light')
  {
    setMode('dark');
    document.body.style.backgroundColor = "#042743";
    document.body.style.caretColor = "white";
    showAlert("Dark Mode is enabled now");
 
  }
  else
  { 
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.caretColor = "black";
    showAlert("Light Mode is enabled now");
  }
}



  return (
    <>
 <Navbar title="TextUtils" about = "About me" mode={mode} toggleMode={toggleMode}  showAlert={showAlert}/>
  <Alerts alert={alertMessage}/>
 <TextForm heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
  {/* <About/> */}
  </>
      
  );
}

export default App;

