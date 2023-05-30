import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ActivationPage, BestSellingPage, EventPage, FAQPage, HomePage, LoginPage, ProductPages, SignupPage, } from './Routes'

import './App.css'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { loadUser } from './redux/actions/user'
import Store from './redux/store'
import { useSelector } from 'react-redux'


const App = () => {
  const{loading}=useSelector((state)=>state)
  useEffect(() => {
    Store.dispatch(loadUser())
  }, [])

  return (
 <>
 {
  loading ? (
    null
  ):(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
      <Route
        path="/activation/:activation_token"
        element={<ActivationPage />}
      />
       <Route path="/products" element={<ProductPages/>} />
       <Route path="/best-selling" element={<BestSellingPage/>} />
       <Route path="/events" element={<EventPage/>} />
       <Route path="/faq" element={<FAQPage/>} />
    </Routes>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </BrowserRouter>
  )
 }
 
 </>
  )
}

export default App
