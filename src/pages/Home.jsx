import Header from "../components/Header"
import NobackgroundDesign from "../components/NobackgroundDesign"
import About from "../components/About"
import Goods from "../components/Items"
import Footer from "../components/Footer"
import cloth from '../assets/cloth.png'
import { useFetch } from "../axios/custom_hook/fetch"
import Loading from "../components/Loading"
import { calcRate, getLike } from "../vanilla/equateRating"
import { getCookie } from "../vanilla/cookie"


function Home() {
  const userId = getCookie('userId')
  const {data,loading} = useFetch('/items/allitems')
  const toprint = data && data.filter((_,i)=> i<=3)


  return (

   <>
   <Header heading1='To Start Shopping' heading2 = 'The Best Brand' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dicta commodi esse ad officia quidem cupiditate nam consectetur unde, placeat dolorem vero excepturi a? Quo illo repudiandae nihil delectus natus.' img={cloth}/>
   <NobackgroundDesign/>
   <About/>
   <div className="section">
    <h1 className="font-sans font-black text-center text-5xl my-20">Shop Now</h1>
     <div className={`grid p-20 ${toprint?.length <= 2 ?'lg:grid-cols-3':'grid-cols-auto'}`}>
      {
        loading?<Loading/>
        :toprint?.map(item=><Goods item={item} key={item._id} id={item._id} rating={calcRate(item.rating)} like={getLike(item.liked)} name={item.name} amount={item.amount} />)
      }
   </div>
   </div>
   <Footer/>
   </>
  )
}

export default Home
