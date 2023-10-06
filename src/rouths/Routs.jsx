import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../assets/pages/Home/Home';
import Login from '../assets/pages/login/Login';

const Routs = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]

    }
])


export default Routs;