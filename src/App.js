import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Activity from "./components/Activity/Activity"
import Daily from "./components/Daily/Daily"
import Weekly from "./components/Weekly/Weekly"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="activity" element={<Activity />} />
          <Route path="daily" element={<Daily />} />
          <Route path="weekly" element={<Weekly />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
