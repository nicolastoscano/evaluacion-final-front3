import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Routes/Contact.jsx'
import Home from './Routes/Home.jsx'
import Detail from './Routes/Detail.jsx'
import Favs from './Routes/Fav.jsx'
import { ContextProvider } from './Components/utils/global.context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/fav' element={<Favs/>}/>          
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
