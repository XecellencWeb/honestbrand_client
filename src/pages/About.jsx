import Header from "../components/Header"
import about from '../assets/about.png'
import Footer from "../components/Footer"
import { SendFill } from "react-bootstrap-icons"
import { useRef } from "react"
import { sendMail } from "../vanilla/manipulateuser/sendMail"

function About() {
    const subject = useRef()
    const message = useRef()

  return (
   <>
   <Header heading1='You Deserve' heading2 = 'Gives You The Best' desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam esse assumenda. Vitae sapiente nulla corporis, expedita similique provident quos quod ipsum nobis blanditiis nesciunt unde et omnis autem veniam.' img={about}/>
   <div className="section ">
    <h1 className="font-sans font-black text-5xl my-12 max-w-7xl mx-auto">The Best Experience</h1>
   <p className="px-8 max-w-7xl mx-auto mb-8">Hello! I'm Josiah Newman, a passionate and dedicated fullStack Developer, and I invite you to explore my work and creative journey right here on Honest Brand. While this website may not be my formal portfolio, it serves as a temporary showcase of my design project, skills, and experiences.</p>
   <h2 className="max-w-7xl mx-auto font-rem mb-4 text-3xl">Why Honenst Brand?</h2>
   <p className="px-8 max-w-7xl mx-auto">
   Just as I value honesty and transparency in my design work, I believe in reflecting those same principles in how I present my portfolio. "Honest Brand" embodies my commitment to integrity and authenticity in design, which I aim to infuse into every project I undertake.
   </p>
   <h2 className="max-w-7xl mx-auto font-rem my-12 text-3xl">Key Features Of Honest Brand:</h2>
   <ol className="list-decimal max-w-7xl mx-auto features_css">
    <li className="">
        <h3 className="">Intuitive Order Placement:</h3>
        <p className="">
        We've created a simple and intuitive order placement system that guides your customers through the shopping process seamlessly. With a user-friendly interface, customers can easily browse products, add them to their cart, and check out effortlessly.
        </p>
    </li>
    <li className="">
        <h3 className="">Smart Cart Management:</h3>
        <p className="">
        Our website features an intelligent shopping cart that calculates totals, applies discounts, and suggests related products to enhance the shopping experience. Customers can review their cart at any point and make adjustments as needed.
        </p>
    </li>
    <li className="">
        <h3 className="">Order Tracking</h3>
        <p className="">
        Keep your customers informed every step of the way with real-time order tracking. From the moment they place an order until it's delivered to their doorstep, they can easily track its status and estimated delivery time.
        </p>
    </li>
    <li className="">
        <h3 className="">Inventory Management</h3>
        <p className="">
        As a business owner, managing your products and inventory is crucial. Our system provides you with a user-friendly dashboard to effortlessly update product listings, monitor stock levels, and receive notifications when it's time to restock.
        </p>
    </li>
    <li className="">
        <h3 className="">Customer Profiles</h3>
        <p className="">
        Offer a personalized shopping experience by allowing customers to create profiles. They can save their shipping information, track order history, and receive tailored recommendations based on their preferences.
        </p>
    </li>
    <li className="">
        <h3 className="">Responsive Design:</h3>
        <p className="">
        Your website will be accessible and visually appealing on all devices, from desktops to smartphones, ensuring a consistent and enjoyable shopping experience for all your customers.
        </p>
    </li>
   </ol>
   </div>
   <div id='faq'  className="section remove-space">
    <h1 className="w-full px-4 font-sans font-black text-5xl my-20">Frequently Asked Questions</h1>
    <div className="wavy-curve">
    <ul className="remove-bullets columns-two-bs sm:w-10/12 mx-auto px-8">
        <li>
            <h1 className="font-sans font-bold text-3xl my-12">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque architecto officia error? Minima nisi culpa alias necessitatibus doloremque blanditiis, voluptas vitae doloribus, id quod aut rerum magni explicabo quas.</p>
        </li>
        <li>
            <h1 className="font-sans font-bold text-3xl my-12">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque architecto officia error? Minima nisi culpa alias necessitatibus doloremque blanditiis, voluptas vitae doloribus, id quod aut rerum magni explicabo quas.</p>
        </li>
        <li>
            <h1 className="font-sans font-bold text-3xl my-12">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque architecto officia error? Minima nisi culpa alias necessitatibus doloremque blanditiis, voluptas vitae doloribus, id quod aut rerum magni explicabo quas.</p>
        </li>
        <li>
            <h1 className="font-sans font-bold text-3xl my-12">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque architecto officia error? Minima nisi culpa alias necessitatibus doloremque blanditiis, voluptas vitae doloribus, id quod aut rerum magni explicabo quas.</p>
        </li>
        <li>
            <h1 className="font-sans font-bold text-3xl my-12">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque architecto officia error? Minima nisi culpa alias necessitatibus doloremque blanditiis, voluptas vitae doloribus, id quod aut rerum magni explicabo quas.</p>
        </li>
        <li>
            <h1 className="font-sans font-bold text-3xl my-12">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque architecto officia error? Minima nisi culpa alias necessitatibus doloremque blanditiis, voluptas vitae doloribus, id quod aut rerum magni explicabo quas.</p>
        </li>
        <li>
            <h1 className="font-sans font-bold text-3xl my-12">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque architecto officia error? Minima nisi culpa alias necessitatibus doloremque blanditiis, voluptas vitae doloribus, id quod aut rerum magni explicabo quas.</p>
        </li>
        <li>
            <h1 className="font-sans font-bold text-3xl my-12">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque architecto officia error? Minima nisi culpa alias necessitatibus doloremque blanditiis, voluptas vitae doloribus, id quod aut rerum magni explicabo quas.</p>
        </li>
        <li>
            <h1 className="font-sans font-bold text-3xl my-12">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque architecto officia error? Minima nisi culpa alias necessitatibus doloremque blanditiis, voluptas vitae doloribus, id quod aut rerum magni explicabo quas.</p>
        </li>
        <li>
            <h1 className="font-sans font-bold text-3xl my-12">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque architecto officia error? Minima nisi culpa alias necessitatibus doloremque blanditiis, voluptas vitae doloribus, id quod aut rerum magni explicabo quas.</p>
        </li>
    </ul>
    </div>
   </div>
   <form onSubmit={(e)=>sendMail(e,subject,message)} id="contact" className="small-box">
    <div className="m-12 flex flex-col">
    <h1 className="font-rem text-3xl my-8">Send us a message</h1>
    <input placeholder="Enter Subject....." ref={subject} className="mb-4" type="text" name="" id="" />
    <textarea placeholder="Enter Message Body....." ref={message} className="resize-none text-2xl p-4" name="" id="" cols="30" rows="10"></textarea>
    <button type="submit"><SendFill size={30}/></button>
    </div>
   </form>
   <Footer/>
   </>
  )
}

export default About
