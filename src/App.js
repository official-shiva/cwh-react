import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

let title = "TextUtils";
function App() {
  return (
    <>
      {/* <Navbar title={title} about={"About TextUtils"} /> */}
      <Navbar title={title} />
      {/* <Navbar /> */}
    </>
  );
}

export default App;
