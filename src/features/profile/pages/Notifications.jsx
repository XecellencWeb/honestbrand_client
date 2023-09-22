import { useSocket } from "./socket-functions/Basic"
import { Link } from 'react-router-dom'
import ShowNotice from './admin/SubPage/components/ShowNotice'


function Notifications() {
  const {notifications} = useSocket()

  return (
    <div>
       <h1 className="font-sans font-black pl-4 my-20">Notifications</h1>
          {notifications?.length === 0 && <p className="text-center text-slate-400 my-20">No Notification</p>}
          
          <div className="w-full">
          
          {
            notifications?.map((message,index) => <Link  to={`#${index}`} key={index} className={`block mb-4  ${!message?.seen && 'font-sans font-bold '} sm:px-12 p-6 hover:scale-x-90 hover:scale-y-75 hover:text-green-500 hover:bg-gray-50`}>
              <h1 className={`mb-2 ${!message.seen ?'text-black':'text-gray-500'} font-serif`}>{message.heading}</h1>
              <div className="pl-2">
                {message.message?.slice(0,200)+'.........'}
              </div>
            </Link>)
          }
          </div>

          <ShowNotice/>
    </div>
  )
}

export default Notifications
