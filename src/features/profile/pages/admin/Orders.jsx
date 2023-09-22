import { Stack } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import useRedirectAdmin from "./SubPage/components/useRedirectAdmin"

function Orders() {
  useRedirectAdmin()
  return (
    <div>
    <h1 className="font-sans font-black pl-4 my-20">Manage Orders</h1>
    <div className="w-4/5 mx-auto">

         <Link to='orders' className="">
           <div className="flex sm:w-1/2 flex-col bg-slate-300 hover:text-white hover:bg-blue-300 p-20 items-center rounded-lg">
             <Stack size={100}/>
             <p className="mt-12">Total Orders: </p>
           </div>
         </Link>
         <div className="mt-20" id="notifications">
          <h1 className="font-sans my-10 text-center font-bold">Notifications</h1>
          <p className="text-center text-slate-400">No Notification</p>
    </div>
    </div>
 </div>
  )
}

export default Orders
