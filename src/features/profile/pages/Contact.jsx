import { useRef } from 'react'
import {SendFill} from 'react-bootstrap-icons'
import { sendMail} from '../../../vanilla/manipulateuser/sendMail'

function Contact() {
  const sub = useRef()
  const mail = useRef()
  


  return (
    <div>
    <h1 className="font-sans font-black pl-4 my-20">Contact</h1>
    <h1 className="font-sans my-10 text-center font-bold">Send us a mail</h1>
      <form onSubmit={(e)=>sendMail(e,sub,mail)} className="mx-auto sm:flex max-w-lg sm:items-center sm:flex-col">
        <div className="w-full">
          <p className="">Subject:</p>
        <input ref={sub} type="text" className="border-solid border-2 border-slate-200 block w-full" />
        </div>
        <div className="w-full mt-12">
          <p className="">Mail:</p>
          <textarea ref={mail} name="" id="" rows="5" className="p-4 text-2xl border-2 w-full resize-none"></textarea>
        </div>
        <button type="submit" className='self-end text-slate-400 bg-slate-100'><SendFill size={25}/></button>
      </form>
      
    </div>
  )
}

export default Contact
