import { Link, useLocation } from "react-router-dom"
import Customers from "./components/Customers"
import NotFound from "../../NotFound"
import Admins from "./components/Admins"


function OutletU() {
  const {pathname} = useLocation()
  const path = pathname.split('/')[3]
  
  switch (path) {
    case 'customers':
      return <Customers/>
    case 'admins':
       return <Admins/>
    default:
      return <NotFound message='Am Sorry but The Request Page was not found on the server'/>
  }
  

  
}

export default OutletU
