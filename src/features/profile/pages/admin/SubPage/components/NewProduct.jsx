import { createRef, useRef, useState } from "react"
import { auth } from "../../../../../../axios/defaults"
import { authBox } from "../../../../../../vanilla/authbox"
import { Select } from "./FormComponents"
import axios from "axios"
import { getCookie } from "../../../../../../vanilla/cookie"


function NewProduct() {
    const info = [createRef(),createRef(),createRef(),createRef()]
    const [ref,setRef] = useState()
    const [type,setType] = useState()
    const [name,amount,number,stack] = info
    const [imgs,setImgs] = useState([])
    const online = useRef()

    const addLocalImg = async(e)=>{
      authBox(102)
        const localImg = e.target.files[0]
        const data = new FormData()
        data.append('file',localImg)
        data.append('upload_preset','honestbrand')
        const cloudName = 'dckgvsray'
        try {
          const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`,data)
          authBox(200,'Successfully Added')
          setImgs(prev=>[...prev,res.data.url])  
          e.target.value = ''
        }catch(err){
            authBox(err.status,err.message)
        }
    }

    const removeimg = (index)=>{
      const newImgs = imgs?.filter((_,i)=> i!==index)
      setImgs(newImgs)
    }

    const addProduct = async(e)=>{
        e.preventDefault()
        authBox(102)
        if(!ref){
          authBox(401,'You must Select a Type')
          return
        }

        if(imgs.length === 0)return authBox(401,'Item must have at least one Image')
        const token = getCookie('access_token')
        const data = {
            name:name.current.value,
            amount:amount.current.value,
            available:number.current.value,
            stack:stack.current.value,
            type:ref,
            featured:JSON.parse(type),
            pictures:imgs
        }
        try {
          const {status} = await auth.post(`/items/additem/${token}`,data)
          authBox(status,"Item Sucessfully Added")
        }catch(err){
           authBox(err.status,err.response.data)
        }

    }
  return (
    <div className="w-full">
    <h1 className="font-sans font-black pl-4 my-20">Add Product</h1>
      <form onSubmit={addProduct} className="grid grid-flow-row w-3/4 mx-auto gap-3 items-start">
        <div className="flex flex-col">
          {imgs.length > 0 && <div className="grid gap-2 grid-flow-col pb-4 pt-8 mb-16 scroll--low-res max-w-6xl overflow-y-hidden">
            {imgs.map((img,index)=><div key={index} className="w-24 h-24 relative">
              <img src={img} className="w-full h-full" alt='upload image'/>
              <button type="button" onClick={()=>removeimg(index)} className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-full z-50 hover:scale-75 focus:scale-100">x</button>
            </div>)}
            </div>}
          <input ref={online} type="text" className=" font-sans font-light text-2xl border-slate-500 border-solid border-sm mx-0" placeholder="Your Image link goes here - For image on the internet"/>
          <div className="mb-8">
          <button type="button" onClick={()=>setImgs(prev=>[...prev,online.current.value])} className="w-fit bg-blue-400 text-white mx-0">Add Picture</button>
          <label className="text-blue-400 font-sans rounded-none  mx-4 p-0 font-thin" style={{borderBottom:'1px solid'}}>Add a Picture from Computer
          <input onChange={addLocalImg} type="file" className="hidden" name="" id="" />
          </label>
          </div>
        </div>
        <input ref={name} type="text" className=" font-sans font-light text-2xl border-slate-500 border-solid border-sm mx-0" placeholder="Name of Goods" required/>
        <input ref={amount} type="number" className=" w-96  font-sans font-light text-2xl border-slate-500 border-solid border-sm mx-0" placeholder="Amount In Naira" required/>
        <input ref={number} type="number" className=" w-96 font-sans font-light text-2xl border-slate-500 border-solid border-sm mx-0" placeholder="Number of Goods" required/>
        <Select name='Type of Product' array={['Gadgets','Clothes','Accessories']} setRef={setRef}/>
        <div className="">
          <h1>Featured</h1>
          <input type="radio" className="cursor-pointer" onClick={(e)=>setType(e.target.value)} value={true} name="Featured" id="" /><span className="text-lg font-black">True</span>
          <input type="radio" className="cursor-pointer" onClick={(e)=>setType(e.target.value)} value={false} name="Featured" id="" /><span className="text-lg font-black">False</span>
        </div>
        <textarea ref={stack} name="" id="" className="font-serif h-48 p-4 sm:w-3/4 resize-none mt-6 font-light text-2xl border-slate-500 border-solid border-sm mx-0" placeholder="Information on Goods" required>

        </textarea>
        <button className="w-fit bg-orange-400 text-white mx-0 mt-8" type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default NewProduct
