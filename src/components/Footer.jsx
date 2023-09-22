import { Link } from "react-router-dom"
import Logo from "./Logo"
import SearchBox from "./SearchBox"
import { Facebook, Instagram, Google, Phone, Twitter, Whatsapp } from "react-bootstrap-icons"

function Footer() {
  const icoSize = 25
  return (
    <footer className="flex-centered">
        <div className="logo">
        <Logo/>
        </div>
        <div className="one flex-centered-y">
        <div className="search">
        <SearchBox id="sm-search"/>
        <div className="social flex-centered-row-x">
          <Link to='https://www.fb.com'>
          <Facebook size={icoSize}/>
          </Link>
          <Link to='https://www.is.com'>
          <Instagram size={icoSize}/>
          </Link>
          <Link to='https://www.twitter.com'>
          <Twitter size={icoSize}/>
          </Link>
          <Link to='https://web.whatsapp.com'>
          <Whatsapp size={icoSize}/>
          </Link>
          <Link to='tell:07069093060'>
          <Phone size={icoSize}/>
          </Link>
          <Link to='mailto:newmanjosiah888@gmail.com'>
          <Google size={icoSize}/>
          </Link>
        </div>
        </div>
    <ul className="">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/about'> About</Link></li>
        <li><Link to='/goods'>Goods</Link></li>
        <li><Link to='/filter'>Filter Goods</Link></li>
        <li><Link to='/about/#contact'>Contact Us</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
    </ul>
    </div>
    <div className="two flex-centered"><p>Copyrighted @2023</p></div>
    </footer>
  )
}

export default Footer
