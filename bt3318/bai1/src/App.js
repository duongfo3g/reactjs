import logo from './logo.svg';
import './App.css';
import Home from '.page/Home.js';

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
