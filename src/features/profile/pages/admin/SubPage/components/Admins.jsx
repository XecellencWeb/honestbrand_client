import { PersonFill } from "react-bootstrap-icons"
import { useFetch } from "../../../../../../axios/custom_hook/fetch"
import Loading from "../../../../../../components/Loading"
import { getCookie } from "../../../../../../vanilla/cookie"
import SendBox from "./SendBox"
import { useContext, useState } from "react"
import { userInfo } from "../../../../Profile"
import { unmakeAdmin } from "../../../../../../vanilla/manipulateuser/disAdmin"

function Admins() {
    const userId = getCookie('userId')
    const token = getCookie('access_token')
    const operating = useContext(userInfo)
    const isBoss = operating?.isBoss
    const {data,loading} = useFetch(`/auth/fetchusers/${token}`)
    const users = data?.filter(user => user.isAdmin && user._id !== userId)
    const [toUser, setToUser] = useState()
    const [toBoss, setToBoss] = useState(false)
    const [subject, setSubject] = useState()

    const sendToBoss  = ()=>{
      setSubject('Honest Brand Admin Message')
      setToBoss(true)
    }

  return (
    <>
    <div>
         <div>
      <h1 className="font-sans font-black pl-4 my-20">Users</h1>
      <div className="">
        {loading?<Loading/>
        :users?.map(user => <div className=" flex flex-col items-center lg:grid grid-cols-3 sm:w-4/5 mx-auto mb-16" key={user._id}>
            <div className="w-40 h-40 overflow-clip rounded-full flex justify-center lg:justify-start">
            {user?.picture?<img className="w-full h-full" src={user?.picture} alt={user?.fullName} />:<PersonFill className="" size={50}/>}
            </div>
                <div className="w-full mt-8 text-center lg:text-left">
                    <h1 className="font-mono font-bold text-2xl">{user?.fullName}</h1>
                    <p className="">{user?.email}</p>
                </div>
                <div className="w-full text-center lg:flex flex-col items-end ">
                    <h1 className=" text-base text-green-400 font-bold font-serif lg:text-left w-full lg:w-28 lg:mb-4">{
                      user.isBoss?'Boss':user.isAdmin && 'Admin'
                    }</h1>
                    <button onClick={()=>setToUser(user)} className="text-base m-0 p-0 text-cyan-400 max-lg:mr-4">{user.isBoss?'Contact Boss':'contact Admin'}</button>
                    {
                    user.isBoss?null
                    :user.isAdmin  && <button onClick={()=>isBoss?unmakeAdmin(user._id):sendToBoss()} className="p-0 w-fit text-base m-0 pt-2 text-blue-500">{isBoss?'Unmake Admin':operating?.isAdmin && 'Report Admin'}</button>
                    }
                    

                </div>
            </div>)
        }
      </div>
    </div>
    </div>
    <SendBox toUser = {toUser} setToUser = {setToUser} toBoss = {toBoss} setToBoss={setToBoss} subject={subject} setSubject={setSubject}/>
    </>
  )
}

export default Admins
