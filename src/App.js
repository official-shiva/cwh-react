import React, { useState } from 'react';
import './App.css';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import ErrorPage from './components/ErrorPage';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled!!", "success")
      document.title = "TextUtils - Dark Mode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!!", "success")
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <Routes> */}
      {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading={"Enter your text bellow"} mode={mode} />} /> */}
      {/* <Route exact path="/about" element={<About />} /> */}
      {/* <Route exact path="/*" element={<ErrorPage mode={mode} />} /> */}
      {/* </Routes> */}
      {/* </Router> */}
      <TextForm showAlert={showAlert} heading={"Enter your text bellow"} mode={mode} />
    </>
  );
}

export default App;
