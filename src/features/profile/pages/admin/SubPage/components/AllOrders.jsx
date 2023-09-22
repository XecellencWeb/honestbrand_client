import { useState } from "react"
import { useFetch } from "../../../../../../axios/custom_hook/fetch"
import Loading from "../../../../../../components/Loading"
import ShowOrders from "./ShowOrders"
import { deleteData } from "../../../../../../vanilla/requests/delete"
import { getCookie } from "../../../../../../vanilla/cookie"


function AllOrders() {
    const token = getCookie('access_token')
    const {data,loading,reload,setReload} = useFetch('/orders/allorders')
    const unresolved = data?.filter(item => !item.resolved)
    const resolved = data?.filter(item => item.resolved)

    const [order,setOrder] = useState()
    function convertDate (date){
        const Daten = new Date(date)
        return Daten
    }
    function formatDate(date) {
        return date.toString().slice(0,24);
      }
  return (
    <div>
      <h1 className="font-sans font-black pl-4 my-20">Orders</h1>
      {data?.length === 0 && <p className="text-center text-slate-400">No Order Available At The Moment.</p> }
        <div className={`grid mb-20 ${unresolved?.length >2?'grid-cols-auto':'md:grid-cols-3'} w-4/5 mx-auto gap-10`}>
            {loading?<Loading/>
            :unresolved?.map(order => <label onClick={()=>setOrder(order)} htmlFor="toogle-order" key={order._id} className="hover:bg-pink-100 hover:p-8 hover:text_dark-pink p-0  relative h-96 rounded-lg shadow-md shadow-slate-50 overflow-hidden">
                <div className="w-full h-1/2 bg-blue-50  " style={{backgroundImage:`url(${order?.picture})`,backgroundSize:'80% 150%',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                </div>
                <div className="p-4">
                <h1 className="font-mono font-bold text-3xl">{order.fullName}</h1>
                <h1 className="font-mono font-light text-2xl"><span className="line-through">N</span>{order.totalAmount}</h1>
                <h1 className="mb-4 font-sans font-thin text-2xl">{order.totalNumber} Goods Bought</h1>
                <h1 className="text-base absolute bottom-0 left-0 m-4">{formatDate(convertDate(order.madeAt))}</h1>
                </div>
            </label>)}
        </div>
        <ShowOrders object ={order} load={reload} reload={setReload}/>
        <h1 className="font-rem text-center mb-20">Resolved Orders</h1>


        <div className="max-w-7xl mx-auto px-20">
          {resolved?.length === 0 && <p className="text-center text-slate-400">No Resolved Order</p>}
            {loading?<Loading/>
            :resolved?.map(order => <div onClick={()=>setOrder(order)} key={order._id} className="grid md:grid-cols-2 md:gap-10 mb-20">
              <div className="">
                <div className="w-full h-56 bg-blue-50  "style={{backgroundImage:`url(${order?.picture})`,backgroundSize:'80% 200%',backgroundPosition:'center 0',backgroundRepeat:'no-repeat'}}>
                </div>
                <h1 className="mt-4 font-mono font-bold text-3xl">{order.fullName}</h1>
              </div>

                <div className=" flex flex-col relative ">
                <h1 className="leading-8 pt-4">{order.orders.map(order=>order.name).join(', ')}</h1>
                <div className="flex gap-5 my-8">
                  <h1 className="text-2xl font-serif">Total Amount: <span className="line-through">N</span>{order.totalAmount}</h1>
                  <h1 className="text-2xl font-serif">Total Number: {order.totalNumber}</h1>
                  <button onClick={()=>{deleteData(`/orders/delete/${order._id}/${token}`,reload,setReload)}} className="text-base text-red-500">Delete Order</button>
                </div>
                <h1 className=" text-base self-end  m-4 md:absolute bottom-0 right-0">{formatDate(convertDate(order.resolvedAt))}</h1>
                </div>
            </div>)}
        </div>

    </div>
  )
}

export default AllOrders
