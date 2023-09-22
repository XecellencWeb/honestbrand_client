import { NavigateToSection } from '../vanilla/togglePage'
import { getCookie } from '../vanilla/cookie'
import { useCart } from '../contexts/cart'
import { authBox } from '../vanilla/authbox'
import Rating from './reusables/Rating'
import ItemDesc from './ItemDesc'
import Like from './Like'

function Item(Props) {
  const userId = getCookie('userId')
  const size = 15
  const {name,amount,rating,img,id,like,className,item} = Props
  const{addToCart} = useCart()
  

  const updateCart = (e)=>{
    e.stopPropagation()

      addToCart({id,name,amount,rating,img:item.pictures[0],number:1})
      authBox(200,'Added to Cart')
  }

  const showRating = (e)=>{
    e.stopPropagation()
   const ratePage = document.querySelector('#toggle-rating')
   ratePage.checked = true
    ratePage.setAttribute('data-id',id)
  }
  

  return (
    <div className='group'>
    <div className={`card-0001 relative ${className} cursor-pointer hover:scale-75`} onClick={()=> NavigateToSection(item?.name.replace(/ /g,''))}>
        <div className="one">
          <div style={{backgroundImage: `url(${img || item?.pictures[0]})`}}>
          </div>
        </div>
        <div className="two flex-centered-y">
          <h1 className='font-sans font-bold p-0 leading-normal m-0 mt-8'>{name}</h1>
          <h1 className='font-black m-0 p-0 leading-normal mb-8'><span className='striked'>N</span>{amount}</h1>
          <Rating rating={rating} size={size}/>
          <div className='inline-buttons'>
            <button onClick={!userId?(e)=>NavigateToSection('login',null,e):(e)=>updateCart(e)} className="background-secondary p-0 px-4">Add To Cart</button>
            <button  onClick={!userId?(e)=>NavigateToSection('login',null,e):(e)=>showRating(e)} className="background-accent p-0 px-4">Rate Item </button>
          </div>
        </div>
        <Like like={like} id={id}/>
    </div>
    <ItemDesc item={item}/>
    </div>
  )
}

export default Item
