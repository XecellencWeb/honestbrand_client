
import { useCart } from "../contexts/cart"
import ShopNowBtn from "./ShopNowBtn"


function CartItems() {
 const {cart,removeFromCart,no,total} = useCart()
 const customLeft = {
            boxShadow: '-5px 5px 5px #333'
 }

 

  return (
    <div className="group">
    <input data-type="cart" data-section='true' className="peer hidden" defaultChecked={true} type="checkbox" name="toggle-cart" id="toggle-cart" />
    <div className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-90 peer-checked:hidden overflow-scroll" style={{zIndex:'50000000'}}>
      <label htmlFor="toggle-cart" className="bg-red-400 text-white absolute top-0 left-0">Close</label>
     <div className="">
      <div className="group">
          <div className="sm:absolute top-1/2 left-1/3 sm:-translate-x-full sm:-translate-y-1/2 sm:w-fit w-full flex flex-col items-end pt-4 px-4 max-sm:mt-32">
            <p className="font-sans font-bold leading-6 text-2xl ">Number of Items: {no}</p>
            <p className="font-sans font-bold leading-6 text-2xl mb-4">Total Amount: <span className="line-through">N</span>{total}</p>
            <ShopNowBtn/>
          </div>
          <div className="scroll--low-res grid grid-flow-col overflow-y-hidden w-11/12 sm:w-1/2 absolute top-1/2 -translate-y-1/2 right-0 p-20">
            {cart.length === 0 ? <p className="text-center text-slate-700 my-20 text-4xl">No Item in Cart</p>
            :cart.map((it,index) => 
               <div key={it.name} className="card-0001 w-64 relative bg-white" style={customLeft}>
                <div className="one bg-pink-100" style={{
                  backgroundImage:`url(${it.img})`,
                  backgroundSize:'contain'
                  }}>
                  <p className="bg-white opacity-80 absolute top-1/4 left-1/2 p-8 -translate-x-1/2 -translate-y-1/2 rounded-lg">
                    {it.number}
                  </p>
                </div>
                <div className="two pt-4 pl-5 lg:py-8">
                  <h1 className="py-0 my-0 mb-2 leading-none font-sans font-bold">{it.name}</h1>
                  <h1 className="py-0 mb-8 my-0 leading-none"><span className='striked'>N</span>{it.amount*it.number}</h1>
                  <button className="bg-blue-600 p-0 px-4 text-white rounded-lg" onClick={()=>removeFromCart(index)}>Remove</button>
                </div>
               </div>
)}
          
          </div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default CartItems
