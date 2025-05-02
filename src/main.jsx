import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/Root';
import Home from './componants/Home';
import About from './componants/About';
import Login from './componants/Login';
import Register from './componants/Register';
import Authproviderrr from './provider/Authproviderrr';
import Order from './componants/Order';
import Privateroute from './privateroute/privateroute';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },

      {
        path: 'about',
        element:<About></About>
      },

      {
        path: '/login',
        element:<Login></Login>
      },

      {
        path: '/register',
        element:<Register></Register>
      },

      {
        path: '/order',
        element:<Privateroute><Order></Order></Privateroute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <Authproviderrr>
        
     <RouterProvider router={router} />
      
       </Authproviderrr>
  </StrictMode>,
)
