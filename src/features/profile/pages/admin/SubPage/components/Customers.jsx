import { PersonFill } from "react-bootstrap-icons"
import { useFetch } from "../../../../../../axios/custom_hook/fetch"
import Loading from "../../../../../../components/Loading"
import { deleteUser, makeAdmin } from "../../../../../../vanilla/manipulateuser/usermethods"
import { getCookie } from "../../../../../../vanilla/cookie"

function Customers() {
  const token = getCookie('access_token')
    const {data,loading} = useFetch(`/auth/fetchusers/${token}`)
    const users = data?.filter(user => !user.isAdmin)
  return (
    <div>
         <div>
      <h1 className="font-sans font-black pl-4 my-20">Users</h1>
      <div className="">
        {loading?<Loading/>
        :users?.map(user => <div className="flex flex-col items-center lg:grid grid-cols-3 sm:w-4/5 mx-auto mb-16" key={user._id}>
            <div className="w-40 h-40 overflow-clip rounded-full flex justify-center lg:justify-start">
                {user?.picture?<img className="w-full h-full" src={user?.picture} alt={user?.fullName} />:<PersonFill className="" size={50}/>}
            </div>
                <div className="w-full mt-8 text-center lg:text-left">
                    <h1 className="font-mono font-bold text-2xl">{user.fullName}</h1>
                    <p className="">{user.email}</p>
                </div>
                <div className="w-full text-center lg:flex flex-col items-end text-cyan-500 leading-6 ">

                    <button onClick={()=>makeAdmin(user._id,user.fullName)} className="p-0 w-fit text-base m-0 max-lg:mr-4 pt-2 text-blue-500">Make Admin</button>
                    <button onClick={()=>deleteUser(user._id,user.fullName)}  className="p-0 w-fit text-base m-0 text-red-300">Delete User</button>

                </div>
            </div>)
        }
      </div>
    </div>
    </div>
  )
}

export default Customers
