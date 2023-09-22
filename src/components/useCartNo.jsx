import { useCart } from "../contexts/cart"


function useCartNo(id){
const {cart} = useCart()
if(!id)return
const cartItem = cart?.find(item=>item.id === id)

  return cartItem?.number
}

export default useCartNo
