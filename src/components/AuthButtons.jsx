import { CartFill, PersonFill, Search } from 'react-bootstrap-icons'
import SearchBox from './SearchBox'
import { NavigateToSection } from '../vanilla/togglePage' 
import { Link } from 'react-router-dom'
import { getCookie } from '../vanilla/cookie'
function AuthButtons(){
  const userId = getCookie('userId')
  return (
    <div className='z-50 my-28 flex absolute top-0 left-1/2 -translate-x-1/2 items-center justify-between w-[95%] mx-auto'>
        <SearchBox/>
        <Link to='#sm-search'><Search size={30} className='search-0001'/></Link>{
          userId?
          <div className='flex p-0  '><Link className='blue-on-hover  p-0 flex items-baseline py-4 px-8' to='/profile'><PersonFill size={30} className=''/><p className='hidden sm:block p-0'>profile</p></Link><label htmlFor='toggle-cart' className='flex items-baseline ml-0 text-white bg-red-400 p-2'><CartFill size={30}/><p className='hidden sm:block p-0'>view cart</p></label></div>
          :<div>
        <button className="ghost-btn-secondary" onClick={()=>NavigateToSection('login')}>Log In</button>
        <button className="ghost-btn-primary" onClick={()=>NavigateToSection('signup')}>Sign Up</button>
        </div>
        }
    </div>
  )
}

export default AuthButtons
