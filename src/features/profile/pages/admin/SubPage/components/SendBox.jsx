import { useContext, useRef } from "react"
import { sendMessage } from "../../../../../../vanilla/manipulateuser/sendMail"
import { useSocket } from "../../../socket-functions/Basic"
import { userInfo } from "../../../../Profile"



function SendBox(Props) {
  const {sendNotification} = useSocket()
  const user = useContext(userInfo)
    const {toUser,setToUser,subject,setSubject,toBoss, setToBoss} = Props
    const stack = useRef()

    const sendEmail = async()=>{
        const heading = subject||'A Message From Your Co Admin at Honest Brand'
        const email = {
            subject: heading,
            stack:stack.current.value,
            toEmail:toBoss?'excellencejosiah@gmail.com':toUser.email
        }
        await sendMessage(email)
        sendNotification({
          heading,
          message:`Hello, ${toUser?.fullName} We have a new support request from ${user?.fullName} sent to your gmail. Please review it and take appropriate action.`,
          seen:false
        },toUser._id)
        reset()
    }
    const reset = ()=>{
        setToBoss(false)
        setSubject(undefined)
        setToUser(undefined)
    }
  return (
    <div className={`min-w-96 m-8 min-h-fit absolute left-0 bottom-0 p-20 shadow-lg shadow-gray-500 bg-white ${toUser || toBoss ?'flex':'hidden'} flex-col`}>
      <button onClick={reset} className="absolute top-0 right-0 text-3xl">x</button>
      <h1 className="mb-12">{toUser?.fullName || 'The Boss'}</h1>
      <textarea ref={stack} placeholder="Enter Message......" name="" id="" cols="30" rows="10" className="border-2 border-gray-500 rounded-md resize-none p-8"></textarea>
      <button onClick={sendEmail} className="py-2 w-fit px-8 mt-2 bg-blue-500 text-white text-base">Send</button>
    </div>
  )
}

export default SendBox
