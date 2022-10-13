import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {Home, About} from './MyRoutes';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<App library = 'Kamran' />} />
    <Route path="/Home" element = {<Home/>} />
    <Route path="/About" element = { <About />} />
  </Routes>
  </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
