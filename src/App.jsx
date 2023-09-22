import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import { useEffect } from "react"
import About from "./pages/About"
import scroll from "./vanilla/slide-animate"
import Goods from "./pages/Goods"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Code from "./components/Code"
import MyAuthContext from "./contexts/auth"
import Profile from './features/profile/Profile'
import Dashboard from "./features/profile/pages/Dashboard"
import Settings from "./features/profile/pages/Settings"
import Contact from "./features/profile/pages/Contact"
import Payments from "./features/profile/pages/Payments"
import CartItems from "./components/CartItems"
import { Cart } from "./contexts/cart"
import Rating from "./components/Rating"
import Users from "./features/profile/pages/admin/Users"
import Products from "./features/profile/pages/admin/Products"
import Orders from "./features/profile/pages/admin/Orders"
import OutletU from "./features/profile/pages/admin/SubPage/OutletU"
import OutletP from "./features/profile/pages/admin/SubPage/OutletP"
import OutletO from "./features/profile/pages/admin/SubPage/OutletO"
import Notifications from "./features/profile/pages/Notifications"
import Basic from "./features/profile/pages/socket-functions/Basic"
import NewNotice from "./features/profile/pages/admin/SubPage/components/NewNotice"





 

function App() {
const {pathname} = useLocation()

useEffect(()=>{
  scroll()
  window.onscroll = scroll
},[pathname])
 

  return (
    <MyAuthContext>
      <Basic>
    <Cart>
    <Rating/>
    <div id="authBox">
    </div>
    <NewNotice/>
    <CartItems/>
    
    <Login/>
    <SignUp/>
    <Code/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/goods" element = {<Goods/>}/>
    <Route path="/profile" element={<Profile/>}>
      <Route index element={<Dashboard/>}/>
      <Route path= 'notification' element={<Notifications/>}/>
      <Route path ='settings' element={<Settings/>}/>
      <Route path = 'contact' element={<Contact/>}/>
      <Route path ='payments' element ={<Payments/>}/>
      <Route path = 'users' element = {<Users/>}/>
      <Route path = 'products' element = {<Products/>}/>
      <Route path = 'orders' element = {<Orders/>}/>
      <Route path = 'users/:page' element = {<OutletU/>}/>
      <Route path = 'products/:page' element = {<OutletP/>}/>
      <Route path = 'orders/:page' element = {<OutletO/>}/>
    </Route>

    </Routes>
    </Cart>
    </Basic>
    </MyAuthContext>
  )
}

export default App

