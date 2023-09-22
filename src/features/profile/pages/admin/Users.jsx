import { PersonBadge, PersonFill} from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { useFetch } from "../../../../axios/custom_hook/fetch"
import useRedirectAdmin from "./SubPage/components/useRedirectAdmin"
import { getCookie } from "../../../../vanilla/cookie"


function Users() {
  const token = getCookie('access_token')
    const usersCount = useFetch(`/auth/count/customers/${token}`)
    const AdminsCount = useFetch(`/auth/count/admin/${token}`)
    
    useRedirectAdmin()
  
  return (
    <>
     <h1 className="font-sans font-black pl-4 my-20">Manage Users</h1>
    <div className="lg:w-3/4 mx-auto flex gap-12 flex-col sm:flex-row p-20 pt-8">
    
      <Link to='customers' className="w-full">
        <div className="flex flex-col items-center bg-slate-300 p-8 rounded-lg hover:bg-blue-300 focus-within:bg-blue-300 hover:text-white">
            <PersonFill size={100}/>
            <p className="pt-4">Number of User: {typeof(usersCount.data) !== 'object' && usersCount.data}</p>
        </div>
      </Link>
      <Link to='admins' className="w-full">
        <div className="flex flex-col items-center bg-slate-300 hover:bg-blue-300 focus-within:bg-blue-300 p-8 rounded-lg hover:text-white">
            <PersonBadge size={100}/>
            <p className="pt-4">Number of Admins: {AdminsCount && AdminsCount.data}</p>
        </div>
      </Link>
    </div>
    <div className="" id="notifications">
    <h1 className="font-sans my-10 text-center font-bold">Notifications</h1>
          <p className="text-center text-slate-400">No Notification</p>
    </div>
    </>
  )
}

export default Users
