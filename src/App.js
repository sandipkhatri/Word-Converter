
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      Type: type
    })  
    setTimeout(()=>{
      setAlert(null);
    },1100);


  }

  const toggleMode = ()=> {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor ='grey';
        showAlert("Dark mode has been enable", "success")
      }
      else {
        setMode('light');
        document.body.style.backgroundColor ='white';
        showAlert("Light mode has been enable", "success")
      }
  }

  return (
    <>
    <BrowserRouter>
  <Navbar textfirst="TEXTUTILLS" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert} />
  
  <div className="container my-3">
   <Routes>
      <Route path="/about" element={<About />}>
      </Route>
      <Route path="/" element={ <Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode} />}>
      </Route>
   </Routes>  
  </div>

 
 
  </BrowserRouter>
   </>
  );
}

export default App;
