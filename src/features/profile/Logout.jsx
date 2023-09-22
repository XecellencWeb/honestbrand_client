import { useNavigate } from "react-router-dom"
import { deleteCookie, getCookie } from "../../vanilla/cookie"
import { useEffect } from "react"


function Logout() {
  const navigate = useNavigate()
const userId = getCookie('userId')
useEffect(()=>{
  !userId && navigate('/')
},[])

const logOut = ()=>{
      deleteCookie('userId')
      navigate('/')
}
  return (
    <div className="group">
      <input defaultChecked={true} className="peer hidden" type="checkbox" name="close-out" id="close-out" />
      <div className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-50 peer-checked:hidden" style={{zIndex:999999}}>
        <label htmlFor="close-out" className="z-50 fixed top-0 right-0 peer-checked:hidden bg-red-500 text-slate-100 rounded-lg m-4 py-4 px-8 text-3xl" >Close</label>
        <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md shadow-slate-700 min-w-[90%] sm:min-w-max  p-20 rounded-lg">
          <p className="p-0 mb-12">Are you sure you want to Log Out?</p>
          <button onClick={logOut} className="text-red-700 cursor-pointer">Yes</button><label htmlFor="close-out" className="font-black text-3xl text-blue-700 cursor-pointer">No</label>
        </div>
      </div>
    </div>
  )
}

export default Logout
