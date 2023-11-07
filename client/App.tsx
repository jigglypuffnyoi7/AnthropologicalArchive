import React from 'react';
import Home from './components/Home';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import MakePageForm from './components/MakePageForm';
import NavBar from './components/NavBar';


const App = () => {
    return (
        <>
          <div style={{color: 'red'}}>HELLO WORLD FROM APP</div>
          <NavBar/>

        </>
    )
}


export default App