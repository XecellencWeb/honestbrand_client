import {Eye, EyeSlash} from 'react-bootstrap-icons'
import { NavigateToSection } from '../vanilla/togglePage'
import { useRef, useState} from 'react'
import { togword } from '../vanilla/passwordToggle'
import { auth } from '../axios/defaults'
import { authBox } from '../vanilla/authbox'
import { useAuthContext } from '../contexts/auth'
import { useNavigate} from 'react-router-dom'
import { setCookie } from '../vanilla/cookie'
import { useGoogleLogin } from '@react-oauth/google'
import { getUser } from '../vanilla/googleSignin'

function Login() {
  const {dispatch} = useAuthContext()
  const navigate = useNavigate()
  const password = useRef()
  const email = useRef()
  const [visible, setVisible] = useState(false)
  const passwordFunction = ()=>{
    setVisible(togword(password.current))
  }
  const registerSection = (res)=>{
    dispatch({type: 'fullName', payload: res.data.fullName})
      dispatch({type: 'email', payload: res.data.email})
      dispatch({type: 'userId', payload: res.data._id})
      setCookie('userId', res.data._doc._id)
      setCookie('access_token',res.data.cookie)
      NavigateToSection()
      navigate('/?login=sucessfull')
      authBox(res.status,"Successful login")
  }
  
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => getUser(codeResponse,registerSection),
    onError: (error) => console.log('Login Failed:', error)
  });
  const logIn = async(e)=>{
    e.preventDefault()
    auth.post('/auth/login',{email: email.current.value, password: password.current.value},{withCredentials:true}).then(res=>
      registerSection(res)
    ).catch(err=>{
      authBox(err.response.status, err.response.data)
    })
  }

  



  return (
    <div><input type="checkbox" data-section='true' data-type='login' defaultChecked={true} name="" id="" className="close" />
    <div className="form--style-0001">
      <form className="small-box" onSubmit={logIn}>
      <h2 className="bold-0002 outstanding-0001">Log In</h2>
        <div className="input--group">
        <input ref={email} type="text"  placeholder='Email'/>
        <div className="container--object">
          <input ref={password} type="password"  placeholder='Password'/>
        {!visible?<Eye onClick={passwordFunction} className='--top-right' size={30}/>:<EyeSlash onClick={passwordFunction} className='--top-right' size={30}/>}
        </div>
        </div>
        <div className="btn--group">
        <button type='button' className='border-2 border-solid border-gray-300' onClick={() => login()}>Sign in with Google 🚀 </button>
        <button className='small' type='submit'>Log In</button>
        </div>
        <p className="--suggest--question">Dont yet have an account<button type="button" onClick={()=>NavigateToSection('signup')}>Sign Up</button></p>
      </form>
    </div>
    </div>
  )
}

export default Login
