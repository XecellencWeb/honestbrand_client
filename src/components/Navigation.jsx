import {Link, useLocation} from 'react-router-dom'
import AuthButtons from './AuthButtons'


function Navigation() {
  const path = useLocation()
  const {pathname, hash} = path
  return (
    <div className="normal-navigation">
      <AuthButtons/>
    <nav className='navigation-main'>
        <input id='toggle-button' className='peer' type='checkbox'></input>
        <label htmlFor='toggle-button' className='h-12 w-16 mx-12 my-6 border-2 peer-checked:border-solid peer-checked:border-slate-400 block absolute top-0 right-0 md:hidden'>
            <div className='w-12 absolute top-1/2 -translate-y-1/2 h-1 bg-white before:absolute before:w-full before:h-full before:bg-white before:-top-2 after:absolute after:w-full after:h-full after:bg-white after:top-2 left-1/2 -translate-x-1/2 '></div>
        </label>
    <ul className='navigation z-50'>
        <li className={pathname ==='/'?'nav-target':'null'}><Link to='/'>Home</Link></li>
        <li className={pathname ==='/services' ? 'nav-target':'null'}><Link to='/services'>Services</Link></li>
        <li className={pathname === '/about' ? 'nav-target':'null'}><Link to='/about'> About</Link></li>
        <li className={pathname === '/goods' ? 'nav-target':'null'}><Link to='/goods'>Goods</Link></li>
        <li className={hash == '#filter' ? 'nav-target':'null'}><Link to='/goods#filter'>Filter Goods</Link></li>
        <li className={hash == '#contact' ? 'nav-target':'null'}><Link to='/about#contact'>Contact Us</Link></li>
        <li className={hash == '#faq' ? 'nav-target':'null'}><Link to='/about#faq'>FAQ</Link></li>
    </ul>
</nav>
</div>
  )
}

export default Navigation
