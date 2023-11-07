import React from 'react';
import Home from './components/Home';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import MakePageForm from './components/MakePageForm';


const App = () => {
    return (
        <>
          <div style={{color: 'red'}}>HELLO WORLD FROM APP</div>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="makepageform" element={<MakePageForm />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            </Route>
          </Routes>     
        </>
    )
}

function Layout() {
    return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/makepageform">Add Article</Link>
            </li>
          </ul>
        </nav>
  
        <hr />
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }

export default App