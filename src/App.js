// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // for color mode of app
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
        msg: message,
        type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgba(23,27,31,1)';
      showAlert("DarkMode has been enabled", "success");
      // document.title ="TextUtilities - Dark Mode Enabled"; 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title = "TextUtils" aboutText="About TextUtilities" mode= {mode} toggleMode = {toggleMode} />

      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode= {mode} />} />
     

          <Route exact path="/" element ={<TextForm heading = "Enter the text to analyze below" showAlert={showAlert} mode= {mode} />} />
          
        </Routes>
      
      
      </div>
      </Router>
      
    </>
  );
}

export default App;
