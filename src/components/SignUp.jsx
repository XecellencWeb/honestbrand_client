import { Eye, EyeSlash, Google } from "react-bootstrap-icons"
import { NavigateToSection } from "../vanilla/togglePage"
import { togword } from "../vanilla/passwordToggle"
import { useState, useRef} from "react"
import { auth } from "../axios/defaults"
import { authBox } from "../vanilla/authbox"
import { useAuthContext } from "../contexts/auth"
import { useNavigate} from 'react-router-dom'
import { setCookie } from '../vanilla/cookie'
import { useGoogleLogin } from '@react-oauth/google'
import { getUser } from '../vanilla/googleSignin'


function SignUp() {
  const navigate = useNavigate()
  const password = useRef()
  const email = useRef()
  const fullName = useRef()
  const {dispatch} = useAuthContext()
  const signUp = async(e)=>{
    e.preventDefault()
    auth.post('/auth/signup',{
      password:password.current.value,
      email: email.current.value,
      fullName: fullName.current.value
    }).then(res=>{
      authBox(res.status,'successfull login',5000)
      dispatch({type:'email',payload: res.data.email})
      dispatch({type:'password', payload: res.data.password})
      NavigateToSection('code',res.data.email)
    }).catch(err=>{
      console.log(err.response)
      authBox(err.response.status,err.response.data,5000)
    })
  }
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
  return (
    <div><input type="checkbox" data-section='true' data-type="signup" defaultChecked={true} name="" id="" className="close" />
    <div className="form--style-0001">
      <form onSubmit={signUp} className="small-box">
      <h2 className="bold-0002 outstanding-0001">Sign Up</h2>
        <div className="input--group">
        <input type="text" ref = {fullName} placeholder="Full Name"/>
        <input type="text" ref={email} placeholder='Email'/>
        <div className="container--object">
          <input ref={password} type="password"  placeholder='Password'/>
          {!visible?<Eye onClick = {passwordFunction} className='--top-right' size={30}/>:<EyeSlash onClick = {passwordFunction} className='--top-right' size={30}/>}
        </div>
        </div>
        <div className="btn--group">
        <button type="button" className='border-2 border-solid border-gray-300' onClick={() => login()}>Sign in with Google 🚀 </button>
        <button className='small'>Register</button>
        </div>
        <p className="--suggest--question">Have an Account <button type="button" onClick={()=>NavigateToSection('login')}>Log In</button></p>
      </form>
    </div>
    </div>
  )
}

export default SignUp
