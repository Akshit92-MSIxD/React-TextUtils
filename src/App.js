import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
       <>
 <Navbar title="TextUtils" about = "About us"/>
 <Navbar title="iDiscuss" about = "About me"/>
 <Navbar  about = "About me"/> {/*  Default value for title(prop) will be taken in Navbar(component) */}

 </>
      
  );
}

export default App;

