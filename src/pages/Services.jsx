import Footer from "../components/Footer"
import Header from "../components/Header"
import BackgroundCurve from "../components/reusables/BackgroundCurve"
import Backgroundless from "../components/reusables/Backgroundless"
import phone from '../assets/realme.png'
import laptop from '../assets/laptop.png'
import accessories from '../assets/accessories.png'
import delivery from '../assets/delivery.png'


function Services() {
  return (

    <>
    <Header heading1='Max Satisfaction' heading2='Shop With Us For' desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur delectus iste officiis placeat odit maxime asperiores dolorum minus ratione eaque obcaecati saepe similique, incidunt pariatur ipsum dolore, dignissimos facilis!' img={phone}/>
    <Backgroundless heading='Sells of High Quality Gadgets and Computers' desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum libero officiis dolores! Tempora sit ad dicta corrupti dignissimos modi. Est aliquam consectetur nulla neque commodi recusandae tempore ad veniam veritatis.' img={laptop}/>
    <BackgroundCurve heading='Buy Your Quality Cloths and Accessories' desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis pariatur eos facilis, sapiente obcaecati modi esse quisquam quaerat, aliquam fugit, tempora inventore recusandae dicta officiis consectetur nulla eaque commodi corporis!' img={accessories}/>

    <Backgroundless heading = 'On-time Delivery' desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis officiis, necessitatibus iure quidem provident error excepturi laboriosam autem ab velit, ad quae nemo voluptatem neque recusandae molestias nihil modi.' img={delivery}/>
    <Footer/>
    </>
  )
}

export default Services
