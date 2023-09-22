import { useContext, useRef } from "react"
import { userInfo } from "../Profile"
import { auth } from "../../../axios/defaults"
import { authBox } from "../../../vanilla/authbox"
import NotFound from "./NotFound"


function Settings() {
  const emailAdress = useRef()
  const userFullName = useRef()
  const info = useContext(userInfo)
  const changeData = async(e)=>{ 
    e.preventDefault()
    auth.put(`/auth/updateuser/${info._id}`,{
      fullName:userFullName.current.value,
      email:emailAdress.current.value
    }).then(res=>{
    authBox(res.status,'Your Info was Updated')
  }).catch(err=>{
    authBox(err.response.status,err.response.data)
  })
}
  return (
    <div className=''>
      <h1 className="font-black font-sans text-3xl my-20 pl-4">Settings</h1>
      <div className="flex flex-col">
          {info ? <form onSubmit={changeData} className="flex flex-col sm:self-center">
            <input ref={userFullName} className="border-2 border-solid border-slate-300 my-4" defaultValue={info.fullName} type="text" placeholder="Fullname" />
            <input ref={emailAdress} className="border-2 border-solid border-slate-300 my-4" defaultValue={info.email} type="email" placeholder="Email" id="" />
            <div className="my-20">
            <input type="checkbox" defaultChecked={true} className="peer hidden" name="close" id="close" />
            <label htmlFor="close" className="my-5 bg-blue-200 hover:scale-100 text-2xl py-4 px-4 rounded-lg hover:cursor-pointer">Change Password</label>
            <button className="my-5 bg-red-200 hover:scale-100 font-normal" type="submit">Change Data</button>
            <label className="z-50 fixed top-0 right-0 peer-checked:hidden bg-red-500 text-slate-100 rounded-lg m-4" htmlFor="close"><p className="p-4 cursor-pointer">Close</p></label>
            <div className="fixed top-0 left-0 h-screen w-screen bg-white bg-opacity-70 backdrop-blur-50 peer-checked:hidden">
              <form action="" className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-slate-700 shadow-lg p-20 rounded-lg">
                
                <p className="p-0">Confirm Password</p>
                <input type="password" className=" p-0 m-0 bottom-1 border-slate-300 border-solid"/>
                <button className="bg-blue-950 text-slate-100 bg-opacity-50 ml-8 p-0 py-1 px-4" type="submit">Confirm</button>
              </form>
            </div>
            </div>
          </form>
          : <NotFound/>
}
      </div>
     <div className="group">
      <input name="close-confirm" defaultChecked={true} id="close-confirm" className="hidden peer" type="checkbox"/>
      <div className="peer-checked:hidden w-screen h-screen fixed top-0 left-0 bg-white bg-opacity-70 ">
      <label className="z-50 fixed top-0 right-0 peer-checked:hidden bg-red-500 text-slate-100 rounded-lg m-4" htmlFor="close-confirm"><p className="p-4 cursor-pointer">Close</p></label>
        <form action="" className="bg-white shadow-lg shadow-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col p-20">
        <input type="password" placeholder="New Password" className=" p-0 m-0 my-2 px-2 bottom-1 border-slate-300 border-solid"/>

        <input type="password" placeholder="New Password" className=" p-0 m-0 my-2 px-2 bottom-1 border-slate-300 border-solid"/>


        <button className="bg-blue-950 text-slate-100 bg-opacity-50 ml-8 p-0 py-1 px-4 mt-10" type="submit">Confirm</button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default Settings
