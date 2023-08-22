import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
       <>
 <Navbar title="TextUtils" about = "About me"/>
 <TextForm heading="Enter the text to analyze below" />

 </>
      
  );
}

export default App;

