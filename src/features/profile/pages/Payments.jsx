import { useFetch } from "../../../axios/custom_hook/fetch"
import Loading from "../../../components/Loading"
import ShopNowBtn from "../../../components/ShopNowBtn"
import { useCart } from "../../../contexts/cart"
import { getCookie } from "../../../vanilla/cookie"


function Payments() {
  const userId = getCookie('userId')
  const {cart,no,total,removeFromCart} = useCart()
  const {data,loading} = useFetch(`/orders/allorders`)
  const myOrder = data?.filter(order => order.userId === userId && !order.resolved )
  const customLeft = {
    boxShadow: '-5px 5px 5px #333'
}
  return (
    <div>
      <h1 className="font-sans font-black pl-4 my-20">Payments</h1>
      <div id="cart">

<h1 className="font-sans my-10 text-center font-bold relative">Cart</h1>
      {
          cart<=0?<>
          
          <p className="text-center text-slate-400">No item in cart</p>
            </>
          :<><div className="flex mx-auto max-w-4xl peer-checked:hidden " style={{zIndex:'50000000'}}>
   
          <div className="w-fit justify-start pl-4 flex flex-col items-start relative bg-white bg-opacity-50 z-50 self-center">
            <p className="font-sans font-bold leading-6 text-2xl ">Number of Items: {no}</p>
            <p className="font-sans font-bold leading-6 text-2xl mb-4">Total Amount: <span className="line-through">N</span>{total}</p>
            <ShopNowBtn className='bg-orange-400 z-50 text-white rounded-lg w-40 sm:static  bottom-0 right-0'/>
          </div>
          <div className="scroll--low-res grid grid-flow-col overflow-y-hidden max-w-3xl col-span-2  top-40  right-0 px-20 pb-20 justify-self-end">
            {cart.map((it,index) => 
               <div key={it.name} className="card-0001 w-64 relative bg-white" style={customLeft}>
                <div className="one bg-orange-100" style={{backgroundImage:`url(${it.img})`,backgroundSize:'contain'}}>
                  <p className="bg-white opacity-80 absolute top-1/4 left-1/2 p-8 -translate-x-1/2  rounded-lg">
                    {it.number}
                  </p>
                </div>
                <div className="two py-20 pl-5 lg:py-8">
                  <h1 className="py-0 my-0 mb-2 leading-none font-sans font-bold">{it.name}</h1>
                  <h1 className="py-0 mb-8 my-0 leading-none"><span className='striked'>N</span>{it.amount*it.number}</h1>
                  <button className="bg-blue-600 p-0 px-4 text-white rounded-lg" onClick={()=>removeFromCart(index)}>Remove</button>
                </div>
               </div>)}
           </div>
         
      </div>
   
    
       </> }
       </div>
      <div className="sm:w-3/4 mx-auto" id="pending">
           <h1 className="font-sans my-10 text-center font-bold">Pending</h1>
           <div className=" grid grid-flow-col overflow-x-auto gap-5 pb-20 p-4 px-20 snap-x scroll--low-res">
           {myOrder && myOrder.length === 0 && <p className="text-center text-slate-400">No pending item</p>}
          {loading?<Loading/>
          :myOrder && myOrder.map(order=> order.orders.map(item => 
            <div key={item.id} className="w-96 h-96 rounded-2xl overflow-hidden shadow-lg snap-center ">
              <div className="w-full h-1/2 bg-pink-100 " style={{backgroundImage:`url(${item.img})`,backgroundSize:'100% 200%'}}></div>
              <div className="flex flex-col items-center pt-8">
                <h1 className="font-serif font-bold mb-4">{item.name}</h1>
                <h1 className=""><span className="line-through">N</span>{item.amount}</h1>
                <h1 className=""><span className="font-serif text-lg">Quantity: </span> {item.number}</h1>
              </div>
            </div>
          ))}
           </div>

      </div>
    </div>
  )
}

export default Payments
