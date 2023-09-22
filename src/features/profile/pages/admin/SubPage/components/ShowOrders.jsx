import { useContext, useRef } from "react"
import { auth } from "../../../../../../axios/defaults"
import { authBox } from "../../../../../../vanilla/authbox"
import { userInfo } from "../../../../Profile"
import { sendMessage } from "../../../../../../vanilla/manipulateuser/sendMail"
import { useSocket } from "../../../socket-functions/Basic"


function ShowOrders(Props) {
    const {object,load,reload} = Props
    const {sendNotification} = useSocket()
    const hide = useRef()
    const resolveOrder = async()=>{
        authBox(102)
        try {
            await auth.put(`/orders/resolve/${object?._id}`)

            const resolvedGoods = {
              subject: 'Your Goods has just been Delivered.',
              stack:`Dear Valued ${object?.fullName},
    
              We want to extend our heartfelt appreciation for taking the time to explore our Talent Showcase Shopping App. Your curiosity and interest in our platform mean the world to us, and we are truly grateful for your visit.
              
              While your journey with our app may have been a one-time experience, we believe it's just the beginning of a remarkable adventure in the world of digital innovation. Your unique talents and ideas deserve a platform of their own, and we are here to help you bring them to life.
              
              Imagine having your very own app, a space to showcase your talents, products, or ideas to the world. Whether you're an artist, entrepreneur, or creative mind, we are dedicated to turning your vision into a reality.Reply to get get started in Creating your world`,
              toEmail:object?.email
          }

            await sendMessage(resolvedGoods)
            sendNotification(
              {
                heading:'Thank You for Your Order from Honest Brand',
                message:`Dear ${object?.fullName},
                Yours goods has just be resolved please check your email for more details
                `,
                seen:false
              },object?.userId)

            authBox(200,`${object.fullName} Items Sucessfully resolved`)
            reload(!load)
            hide.current.checked = false
        } catch (err) {
          authBox(err.status,err.response.data)
        }
    }
  return (
    <div className="group">
      <input type="checkbox" ref={hide} name="" id="toogle-order" className="peer hidden" />
      <div className={`justify-center flex-col hidden peer-checked:flex fixed top-0 left-0 w-full bg-white h-screen bg-opacity-90`} style={{zIndex:50000000}}>
        <label htmlFor="toogle-order" className="absolute top-0 right-0 bg-slate-200 text-5xl text-red-500 ">x</label>
        <h1 className="text-center font-rem text-3xl mb-2">
          {object?.orders.map(order=>order.name).join(', ')}
        </h1>
        <div className="flex gap-5 mb-12 justify-center w-full">
          <p className="">Total Amount: {object?.totalAmount}</p>
        <p className="">Total Number: {object?.totalNumber}</p>
        </div>
        <div className="grid grid-flow-col max-w-3xl gap-5 mx-auto px-20 pb-20 snap-x overflow-x-auto scroll--low-res">
            {object?.orders.map(order =><div className="snap-end w-96 h-96 bg-white rounded-md overflow-hidden shadow-lg shadow-slate-300" key={order.id}>
                <div className="w-full h-1/2 bg-orange-50" style={{backgroundImage:`url(${order?.img})`,backgroundSize:'100% 200%',}}></div>
                <div className="p-4">
                    <h1 className="mb-4 font-serif font-bold">{order.name}</h1>
                    <h1 className=""><span className="line-through">N</span>{order.amount}</h1>
                    <h1 className="">{order.number} <span className="text-lg">bought</span></h1>
                </div>
            </div>)}
        </div>
        <button onClick={resolveOrder} className="bg-orange-300 w-fit self-center text-white">Order Delivered</button>
      </div>
     </div>
  )
}

export default ShowOrders
