import { HouseExclamation, Gear,PersonExclamation,BagFill,Stack ,CreditCard, PhoneVibrate , DoorOpen, PersonFill, ArrowBarLeft ,BellFill, Bell} from "react-bootstrap-icons"
import { Link, Outlet } from "react-router-dom"
import Logout from "./Logout"
import { useFetch } from "../../axios/custom_hook/fetch"
import { getCookie } from "../../vanilla/cookie"
import { createContext, useRef } from "react"
import Notifier from "./components/notifier"
import { LoadingAuth } from "./components/loading"
import { useSocket } from "./pages/socket-functions/Basic"
import { useNotice } from "./pages/admin/useNotice"
export const userInfo = createContext()


function Profile() {
  const sliderState = useRef()
  const userId = getCookie('userId')
  const token = getCookie('access_token')
  const noticeLength = useNotice()
  const {status} = useSocket()
  const {data,loading} = useFetch(`/auth/user/${userId}/${token}`) 
  const size = 25

  const slide = ()=>{
    const emitter = document.querySelector('[data-type=slider--emitter]')
    const btn = document.querySelector('[data-type=btn--slider]')
    if(sliderState.current.checked){
        emitter.style.animation = 'sliding-close 1s forwards'
        btn.querySelector('span').textContent = '>>'
        btn.classList.remove('--close-slide')
    }else{
      emitter.style.animation = 'sliding 1s forwards' 
      btn.querySelector('span').textContent = 'x'
      btn.classList.add('--close-slide')
    }
  }
  return (
    <userInfo.Provider value={data}>
    <div className='flex min-h-screen relative'>
      <label data-type="btn--slider" htmlFor="emit-slide" className="absolute top-0 left-0 m-4 btn--slider" onClick={slide}>
        <span>&gt;&gt;</span>
        </label>
      <div className="w-1/5 max-md:absolute top-0 left-0 bg-blue-700 relative">
        <input ref={sliderState} type="checkbox" name="" id="emit-slide" data-type="slider" />
     <div className="fixed top-0 left-0 h-screen w-1/5 bg-blue-700" data-type="slider--emitter">

      <div className="flex flex-col items-center text-white pt-12 text-2xl">
        <div className="flex gap-4  "><PersonFill size={size}/><p className="p-0 hidden md:block">{data?.fullName}</p></div>
        <div className="mb-8"><p className="p-0 text-orange-200">{data?.isAdmin && 'isAdmin'}</p>
        <p className="font-sans font-thin">{status}</p></div>
        <div><Link className="flex gap-4 mb-12" to='/'><ArrowBarLeft size={size}/><p className="p-0 hidden md:block">To Homepage</p></Link></div>
        <ul className=" ">
          <li><Link to=' ' className="flex w-full gap-4 mb-4"><HouseExclamation className="" size={size}/><p className="p-0 hidden md:block ">Dashboard</p></Link></li>
          <li><Link to='notification' className="flex w-full gap-4 mb-4 "><div className="relative"><Bell className="" size={size}/>{noticeLength !== 0 && <div className="absolute bottom-0 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-solid border-blue-700"></div>}</div><p className="p-0 hidden md:block ">Notifications</p></Link></li>
          {loading? <LoadingAuth/>
           :data?.isAdmin && 
            <>
              <li>
                <Link to='users' className="flex gap-4 mb-4"><PersonExclamation size={size}/><p className="hidden md:block">Users</p></Link>
              </li>
              <li >
                <Link to='products' className="flex gap-4 mb-4"><BagFill size={size}/><p className="hidden md:block">Products</p></Link>
              </li>
              <li >
                <Link to='orders' className="flex gap-4 mb-4"><Stack size={size}/><p className="hidden md:block">Orders</p></Link>
              </li>
            </>
          }
 
          <li className=""><Link to='settings' className="flex gap-4 mb-4"><Gear size={size}/><p className="p-0 hidden md:block">Settings</p></Link></li>
          <li className=""><Link to='payments' className="flex gap-4 mb-4"><CreditCard size={size}/>
            <p className="p-0 hidden md:block">Payments</p>
          </Link></li>
          <li className=""><Link to='contact' className="flex gap-4 mb-4">
            <PhoneVibrate size={size}/>
            <p className="p-0 hidden md:block">Contact</p>
          </Link></li>
          <li><label htmlFor="close-out" className="flex gap-4 mb-4 cursor-pointer p-0">
            <DoorOpen size={size}/>
            <p className="p-0 hidden md:block">Log-out</p>
            </label>
          </li>
        </ul>
      </div>
     </div>
     </div>
     <div className="relative overflow-clip w-4/5 max-md:w-full">
      <Outlet/>
     </div>
     <Logout/>
     <label htmlFor="toggle-notification" className="fixed top-0 right-0">
      <BellFill size={30} className="fill-red-500"/>
     <div className={`${noticeLength === 0 && 'hidden'} rounded-full bg-red-200 border-2 border-white border-solid w-10 h-10 absolute -bottom-0 right-2 flex items-center justify-center z-0`}><p className="text-white text-sm">{noticeLength}</p></div>
     </label>
     <Notifier/>
    </div> 
    </userInfo.Provider>
  )
}

export default Profile
