import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import App from './App.jsx';
import './index.css'

import History from './components/History/History.jsx';
import Renovation from './components/Renovation/Renovation.jsx';
import Space from './components/Space/Space.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home/>} />
      <Route path="/page/3" element={<History />} />
      <Route path="/page/4" element={<Renovation />} />
      <Route path="/page/5" element={<Space />} />
      <Route path="/page/6" element={<Contact />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
