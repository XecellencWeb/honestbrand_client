import { auth } from "../axios/defaults"
import { useCart } from "../contexts/cart"
import { useSocket } from "../features/profile/pages/socket-functions/Basic"
import { authBox } from "../vanilla/authbox"
import { getCookie } from "../vanilla/cookie"
import { sendMessage } from "../vanilla/manipulateuser/sendMail"

function ShopNowBtn({className}) {
    const {sendNotification} = useSocket()
    const userId = getCookie('userId')
    const token = getCookie('access_token')
    const {cart,setcart,no,total} = useCart()
    const placeOrder = async()=>{
        authBox(102)
        if(cart < 1)return authBox(401,'You haven\'t selected any item yet.')
        try {
          const{data} = await auth(`/auth/user/${userId}/${token}`)
        const{fullName,email,picture} = data
        const order = {
          fullName,userId,email,picture,orders:cart,
          totalAmount:total,
          totalNumber:no
        }
        let i = 0 
        while(i<cart.length){
            const {data} =await auth(`/items/item/${cart[i].id}`)
            if(data.available < cart[i].number){
                return authBox(401,`Sorry. ${cart[i].name} does not currently have the required number.`)
            }
         i++
        }
        let b = 0
        while(b<cart.length){
          const {data} =await auth(`/items/item/${cart[b].id}`)
          const available = data.available - cart[b].number
          try {
            await auth.put(`/items/updateitem/${cart[b].id}`,{available})
          } catch (err) {
            return authBox(err.status,err.response.data)
          }
       b++
      }


        await auth.post('/orders/addorder',order)

        const appreciation = {
          subject: 'Thank you for Testing My Web Application',
          stack:`Dear Valued ${fullName},

          We want to extend our heartfelt appreciation for taking the time to explore our Talent Showcase Shopping App. Your curiosity and interest in our platform mean the world to us, and we are truly grateful for your visit.
          
          While your journey with our app may have been a one-time experience, we believe it's just the beginning of a remarkable adventure in the world of digital innovation. Your unique talents and ideas deserve a platform of their own, and we are here to help you bring them to life.
          
          Imagine having your very own app, a space to showcase your talents, products, or ideas to the world. Whether you're an artist, entrepreneur, or creative mind, we are dedicated to turning your vision into a reality.Reply to get get started in Creating your world`,
          toEmail:email
      }
        await sendMessage(appreciation)
        authBox(200,'Sucessfull Order')
        sendNotification({
          heading:'Thank You for Your Order from Honest Brand',
          email,
          message:`Dear ${fullName},
          We hope this message finds you well. We want to express our sincere gratitude for choosing Honest Brand for your recent purchase. Your trust in us means the world, and we are thrilled to have you as our valued customer.
        
          Summary of goods bought will be seen in the payment page of our your profile page.
  
          `,
          seen:false
        },userId)
        setcart([])
        } catch (err) {
          authBox(err.status,err.response.data)
   
        }
        
   }
  
  return (
    <button onClick={placeOrder} className={className||"bg-orange-500 z-50 text-white rounded-lg w-40 sm:static absolute bottom-20 right-0"}>Shop Now</button>
  )
}

export default ShopNowBtn
