
import { calcRate, getLike } from '../vanilla/equateRating'
import Rating from './reusables/Rating'
import Like from './Like'
import { useRef } from 'react'
import { NavigateToSection } from '../vanilla/togglePage'
import useCartNo from './useCartNo'
import { getCookie } from '../vanilla/cookie'
import { authBox } from '../vanilla/authbox'
import { useCart } from '../contexts/cart'

function ItemDesc(Props) {

    const {item} = Props
    const userId = getCookie('userId')
    const {addToCart} = useCart()



    const updateCart = (e)=>{
      e.stopPropagation()
  
        addToCart({id:item?._id,name:item?.name,amount:item?.amount,rating:calcRate(item?.rating),img:item?.pictures[0],number:1})
        authBox(200,'Added to Cart')
    }
  
    const showRating = (e)=>{
      e.stopPropagation()
     const ratePage = document.querySelector('#toggle-rating')
     ratePage.checked = true
      ratePage.setAttribute('data-id',item?._id)
    }


    const page = useRef()
    const CartNumber = useCartNo(item?._id)
  return (
    <>
        <input ref={page} type="checkbox" data-section='true' defaultChecked={true} data-type={item?.name.replace(/ /g,'')} id='item-desc' className={`peer hidden`}></input>
        <div className={`flex peer-checked:hidden w-full h-screen fixed top-0 left-0 bg-black bg-opacity-90 z-50 text-white justify-center`}>
            <button onClick={()=>page.current.checked = true} className="group-button absolute top-0 right-0 p-4 text-3xl bg-red-500">x</button>
            <div className="max-w-3xl flex flex-col p-20 overflow-auto scroll--low-res">
            <h1 className="font-rem text-4xl my-20">{item?.name}</h1>
            <div className="overflow-hidden w-96 h-72 bg-red-200 rounded-lg">
            <img src={item?.pictures[0]} alt={item?.name} className={`w-full h-full ${item?.pictures?.length === 0 && 'p-20'}`} />
            </div>
            <div className="flex h-12 mt-4 w-96 relative items-center">
            <Rating rating={calcRate(item?.rating)} className='w-fit' size={20}/>
            <p className='mx-4'><span className='w-4 h-4 bg-white'></span>Rating</p>
            <Like id={item?._id} like={getLike(item?.liked)} className='absolute right-0 top-1/2 -translate-y-1/2' size={30} defaultColor='white' Color='red'/>
            </div>
            <p className="pt-0"><span className="">Number In Cart: </span>{CartNumber || '0'}</p>
            <div className="pt-8">
              <p className="">{item?.stack}</p>
            </div>
            <div className="my-4 flex text-white gap-5">
                  <button onClick={!userId?(e)=>NavigateToSection('login',null,e):(e)=>updateCart(e)} className="bg-blue-600 text-white font-mono">Add to Cart</button>
                  <button onClick={!userId?(e)=>NavigateToSection('login',null,e):(e)=>showRating(e)} className="bg-yellow-600 text-white font-mono">Rate Item</button>
            </div>
            <button onClick={!userId?(e)=>NavigateToSection('login',null,e):()=>NavigateToSection('cart')} className='self-end mt-16 bg-orange-400'>Proceed To Cart</button>
            </div>
        </div>
      
    </>
  )
}

export default ItemDesc
