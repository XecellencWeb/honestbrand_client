import { HeartFill } from "react-bootstrap-icons"
import { NavigateToSection } from "../vanilla/togglePage"
import { getCookie } from "../vanilla/cookie"
import { useState } from "react"
import { auth } from "../axios/defaults"

function Like({like,id,className,size,defaultColor,Color}) {
    const userId = getCookie('userId')
    let liked = like || false
    const [seen,setSeen] = useState(liked)
    const likeItem = async(e)=>{
      e.stopPropagation()

        setSeen(seen => !seen)
       
       const likenow = async()=>{

         try {
           await auth.put(`/items/likeitem/${id}`,{userId,liked:!seen})
         } catch (err) {
           setSeen(seen => !seen)
         }
       }
        await likenow() 
   }
   
  return (
    <HeartFill onClick={!userId?(e)=>NavigateToSection('login',null,e):(e)=>likeItem(e)} fill={seen?Color||'darkred':defaultColor ||'#333'} className={className || 'stroke-red-200 absolute top-0 right-0 m-6 z-20'} size={size || 35}/>
  )
}

export default Like
