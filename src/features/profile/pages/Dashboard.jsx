import { useContext, useEffect, useRef, useState } from 'react'
import {PersonFill} from 'react-bootstrap-icons'
import { userInfo } from '../Profile'
import axios from 'axios'
import { auth } from '../../../axios/defaults'
import { getCookie } from '../../../vanilla/cookie'


function Dashboard() {
  const data = useContext(userInfo)
  const [profile,setProfile] = useState()
  const [profilePics,setProfilePics] = useState()
  const [preview,setPreview] = useState()
  const userId = getCookie('userId')
  const pics = useRef()
  const uploader = useRef()
  
  useEffect(()=>{
    setProfile(data)
  },[data])



  useEffect(()=>{
    
    if(pics.current.files.length > 0){
        uploader.current.classList.remove('hidden')
    }
  },[profilePics])

  const handleFileChange = (e) => {
    const file = e.target.files[0]

    // Update the state with the selected file
    setProfilePics(file)

    // Read the selected file and set the preview URL
    const reader = new FileReader()
    reader.onload = () => {
      setPreview(reader.result)
    };
    reader.readAsDataURL(file)
  };

   

  const uploadpics = async()=>{
    const data = new FormData()
    data.append('file',profilePics)
    data.append('upload_preset','honestbrand')
    const cloudName = 'dckgvsray'
    try {
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`,data)
      try {
        const picturedData =await auth.put(`/auth/updateuser/${userId}`,{picture:res.data.url})
          setProfile(picturedData.data._doc)
          setProfilePics(undefined)
          pics.current.value = ''
      } catch (err) {
        console.log(err.response)
      }
     
    } catch (err) {
      console.log(err.response)
    }
    
  }
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="self-start font-black font-sans pl-4 text-3xl my-20  ">Dashboard</h1>
      <div className="lg:grid grid-cols-3 mx-auto flex flex-col">
        <div className="w-fit self-center lg:justify-start ">
        <div className="text-slate-600 w-64 h-64 border-slate-500 border-solid border-2 flex items-center justify-center rounded-full overflow-clip">
        {preview?<img src={preview} alt='preview' />:profile?.picture?<img className='w-full h-full' src={profile?.picture} alt={profile?.fullName} />:<PersonFill size={100}/>}
        </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className='p-0 mt-6'>{profile?.fullName}</p>
          <p className='p-0'>{profile?.email}</p>
        </div>
        <div className="flex flex-col justify-center lg:items-end w-full">
          <p className='p-0 text-slate-600 mt-4'>Add a profile picture</p>
          <input ref={pics} onChange={handleFileChange} className='file:bg-blue-300 file:border-none file:text-white file:px-5 file:rounded-lg file:cursor-pointer p-0 w-80' type="file" name=""  id="" />
          <button onClick={uploadpics} ref={uploader} className="hidden border-2 border-gray-700 border-solid mt-8 bg-orange-200 text-gray-700">upload</button>
        </div>
        
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold font-sans pl-4 text-3xl my-20 text-center">History</h1>
        <div className="self-center max-w-5xl">
          <p className='text-slate-400'>No History available</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
