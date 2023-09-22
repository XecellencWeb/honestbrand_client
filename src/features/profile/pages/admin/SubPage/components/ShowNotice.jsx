import { useEffect } from "react"
import { useSocket } from "../../../socket-functions/Basic"
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"

function ShowNotice() {
    const {notifications,setNotifications} = useSocket()
    const {hash} = useLocation()
    const notice = hash?.slice(1)

    useEffect(()=>{
      const newNotifications = notifications?.map((not,index) => {
        if(index == notice){
          return {...not,seen:true}
        }
        return not
      })
  
      setNotifications(newNotifications)
    },[hash])

  return (
    <div className={`${hash?'fixed':'hidden'} top-0 left-0 bg-black text-white bg-opacity-90 w-screen h-screen flex items-center`} style={{zIndex:'99999999999'}}>
        <Link to='/profile/notification' className='block text-white absolute top-0 right-0 text-5xl m-4 mr-20'>x</Link>
        <div className="max-w-7xl mx-auto text-center h-96">
      <h1 className="mb-4 text-4xl font-serif">{notifications[notice]?.heading}</h1>
      <div className="">
        <p className="text-slate-200">{
            notifications[notice]?.message
        }</p>
      </div>
      </div>
    </div>
  )
}

export default ShowNotice
