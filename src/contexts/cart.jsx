import { createContext, useContext, useState,useEffect } from "react"
const cartProvider = createContext()

export function Cart({children}) {
const[cart,setcart] = useState([])
const addToCart = (item)=>{
  const length = cart.length
  if(length>0){
    let i = 0
    while(length>i){
    if(cart[i].id === item.id){
      const newcart = cart.map((it,index)=>{
          if(index === i){
            return {...it,number: it.number+1}
          }
          return it
      })
      setcart(newcart)
      return
    }
    i++
  }
  }
  setcart([...cart,item])
   
}
const removeFromCart = (index)=>{
if(cart[index].number > 1){
  const addedItem = cart.map((it,i)=>{
    if(index === i){
      return {...it,number: it.number-1}
    }
    return it
  })
  setcart(addedItem)
  return
}
 const newcart = cart.filter((_, i)=> i !==index )
    setcart(newcart)
}

let sum = 0
let totalA = 0
const [no,setNo] = useState()
const [total,setTotal] = useState()
 useEffect(()=>{
  const cartEquation = ()=>{
        for (let index = 0; index < cart.length; index++) {
          sum += cart[index].number
          totalA += cart[index].number*cart[index].amount
        }
        setNo(sum)
        setTotal(totalA)
      }
  cart && cartEquation()
 },[cart])

  return (
    <cartProvider.Provider value={{cart,addToCart,setcart,removeFromCart,no,total}}>
        {children}
    </cartProvider.Provider>
  )
}
export function useCart(){
    return useContext(cartProvider)
}


