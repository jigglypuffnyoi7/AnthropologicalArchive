import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
          <div >nav bar</div>
          <nav>
          <ul>
            <li>
              CS LORE
            </li>
            <li>
              <input type="text" />
            </li>
             <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`newarticle`}>Add Article</Link>
            </li>
            <li>
              <Link to={`article`}>View Article</Link>
            </li>
          </ul>
        </nav>
        </>
    )
}


export default NavBar;