import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {   createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import MakePageForm from './components/MakePageForm';
import ArticleContainer from './components/ArticleContainer';
import '../style.css';
import EditingPage from './components/Editing';

const NavbarWrapper = () => {
    return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
    )
};
const router = createBrowserRouter([
    {
        path: "/", 
        element: <NavbarWrapper/>,
        children:[
             {
                 path: "/:true?", 
                 element: <Home/>
             },
             {
                 path: "/newarticle",
                 element: <MakePageForm/>
             },
             {
                path: `/article/:title`,
                element: <ArticleContainer/>
             },
             {
                path: `/edit/:title`,
                element: <EditingPage/>
             }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);