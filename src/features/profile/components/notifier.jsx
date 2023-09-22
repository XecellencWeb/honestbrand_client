import { useSocket } from "../pages/socket-functions/Basic"
import { Link } from "react-router-dom"

function Notifier() {
  const {notifications} = useSocket()
  return (
    <div className="group">
        <input type="checkbox" defaultChecked={true} className="peer hidden" name="toggle-notification" id="toggle-notification" />
        <div className="peer-checked:translate-x-full transition-all h-screen w-96 bg-slate-100 fixed top-0 right-0 border-slate-300 border-solid " style={{borderLeftWidth: '2px'}}>
            <label htmlFor="toggle-notification" className=" absolute top-0 left-0 p-0 px-2"><p className=" text-5xl text-slate-500">x</p></label>

            <h1 className="font-sans my-10 mt-20 text-center font-bold">Notifications</h1>
          {notifications?.length === 0 && <p className="text-center text-slate-400">No Notification</p>}
          <div className="w-fit mx-4">
          {
            notifications?.map((message,index) => <Link to={`/profile/notification/#${index}`} key={index} className={`${!message?.seen && 'font-sans font-bold text-gray-700'} block mb-12 px-4 hover:text-blue-500 hover:bg-gray-50`}>
              <h1 className={`mb-2 ${!message?.seen ? 'font-sans font-black text-black':'font-serif'} text-gray-500`}>{message.heading.slice(0,20)+'.....'}</h1>
              <div className="text-base pl-2">
                {message.message.slice(0,50)+'.....'}
              </div>
            </Link>)
          }
          </div>
        </div>
      
    </div>
  )
}

export default Notifier
