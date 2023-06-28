import React, { useState } from 'react';
import './App.css';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';

function App(cls) {
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

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }

  const toggleMode = (cls) => {
    console.log(cls)
    removeBodyClasses();
    const bgClass = 'bg-' + cls;
    document.body.classList.add(bgClass);

    showAlert(`${cls} mode has been enabled!!`, "success")

    if (cls === "dark") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  return (
    <>
      <Router>
        <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading={"Try TextUtils - word counter, character counter, uppercase, lowercase"} mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/*" element={<ErrorPage mode={mode} />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;
