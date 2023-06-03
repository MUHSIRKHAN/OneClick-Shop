import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { ActivationPage, BestSellingPage, CheckOutPage, EventPage, FAQPage, HomePage, LoginPage, ProductDetailsPage, ProductPages, ProfilePage, SellerActivationPage, ShopCreatePage, ShopLoginPage, SignupPage, } from './Routes'

import './App.css'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { loadSeller, loadUser } from './redux/actions/user'
import Store from './redux/store'
import { useSelector } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import { ShopHomePage } from './ShopRoutes'
import ShopProtectedRoute from './ShopProtectedRoute'


const App = () => {
   
  const{loading,isAuthenticated}=useSelector((state)=>state.user);
  const{isLoading,isSellerAuthenticated}=useSelector((state)=>state.seller)   //refucer name
 
 
  useEffect(() => {
    Store.dispatch(loadUser())
    Store.dispatch(loadSeller())
   
  }, [])
  
  return (
 <>
 {
  loading || isLoading ? (
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
      <Route
        path="/seller/activation/:activation_token"
        element={<SellerActivationPage />}
      />
       <Route path="/products" element={<ProductPages/>} />
       <Route path="/product/:name" element={<ProductDetailsPage/>} />
       <Route path="/best-selling" element={<BestSellingPage/>} />
       <Route path="/events" element={<EventPage/>} />
       <Route path="/faq" element={<FAQPage/>} />
       <Route path="/checkout" element={
        <ProtectedRoute  isAuthenticated={isAuthenticated}>
       
       <CheckOutPage/>
       </ProtectedRoute>
       }
       />
       
       <Route path="/profile" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <ProfilePage/>
        </ProtectedRoute>
       } />
       {/*shop Routes*/}
         <Route path="/shop-create" element={<ShopCreatePage/>} />
         <Route path="/shop-login" element={<ShopLoginPage/>} />
         <Route path="/shop/:id" element={
          <ShopProtectedRoute isSellerAuthenticated={isSellerAuthenticated}>
<ShopHomePage/>
          </ShopProtectedRoute>}/> 
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
