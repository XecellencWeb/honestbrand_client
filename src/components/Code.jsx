import { useEffect, useRef} from "react"
import { deleteBackwardsCoder,updateCoder,onFocusedCoder } from "../vanilla/Coder"
import { NavigateToSection } from "../vanilla/togglePage"
import { auth } from "../axios/defaults"
import { useAuthContext } from "../contexts/auth"
import { authBox } from "../vanilla/authbox"
import { getCookie } from "../vanilla/cookie"


function Code() {
  const {state} = useAuthContext()
    const minuteTo = 1
    let setter = 1
    const timeElem = useRef() 
    const button = useRef()
    const one = useRef()
    const second = useRef()
    const three = useRef()
    const four = useRef()
    const five = useRef()
    const six = useRef()


    
 const Timer = ()=>{
        timeElem.current.classList.remove('hidden')
        let second = setter%60
        let minute = Math.floor(setter/60)

        
        timeElem.current.textContent = `${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`
        
        if(minute >= minuteTo){ 
            button.current.classList.remove('hidden')
            timeElem.current.classList.add('hidden')
            return
        }
        setter++
  setTimeout(Timer,500) 
}
        useEffect(()=>{
           Timer()
        },[])
        const validateCode = async(e)=>{
          e.preventDefault()
          const enteredCode = []
          enteredCode[0] = one.current.value
          enteredCode[1] = second.current.value
          enteredCode[2] = three.current.value
          enteredCode[3] = four.current.value
          enteredCode[4] = five.current.value
          enteredCode[5] = six.current.value

          const newCode = enteredCode.toString().replace(/,/g,'')
          const code = getCookie('code')
          console.log(newCode)
          console.log(code)
          console.log(second.current.value)
          
          if(code === newCode && code){
            try {
              const {email} = state
            const res =  await auth.post('/auth/validategmail',{email})
              authBox(res.status, 'Account Verified')
              NavigateToSection('login')
            } catch (err) {
              console.log(err.response)
              authBox(err.response.status, err.response.data)
            }
          }
         console.log(enteredCode)
        }
  return (
    <div><input type="checkbox" data-section='true' data-type="code" defaultChecked={true} name="" id="" className="close" />
    <div className="form--style-0001">
      <form className="small-box" onSubmit={validateCode}>
            <h2 className="bold-0002 outstanding-0001">Validate Account</h2>
            <div className="input--number_group">
                <input ref={one} className="--remove-symbol" onChange={e=>updateCoder(e.target)} onFocus={(e)=>onFocusedCoder(e)} onKeyDown={e => deleteBackwardsCoder(e)} type="number" name="" id="" />
                <input ref={second} className="--remove-symbol" onChange={e=>updateCoder(e.target)} onFocus={(e)=>onFocusedCoder(e)} onKeyDown={e => deleteBackwardsCoder(e)} type="number" name="" id="" />
                <input ref={three} className="--remove-symbol" onChange={e=>updateCoder(e.target)} onFocus={(e)=>onFocusedCoder(e)} onKeyDown={e => deleteBackwardsCoder(e)} type="number" name="" id="" />
                <input ref={four} className="--remove-symbol" onChange={e=>updateCoder(e.target)} onFocus={(e)=>onFocusedCoder(e)} onKeyDown={e => deleteBackwardsCoder(e)} type="number" name="" id="" />
                <input ref={five} className="--remove-symbol" onChange={e=>updateCoder(e.target)} onFocus={(e)=>onFocusedCoder(e)} onKeyDown={e => deleteBackwardsCoder(e)} type="number" name="" id="" />
                <input ref={six} className="--remove-symbol" onChange={e=>updateCoder(e.target)} onFocus={(e)=>onFocusedCoder(e)} onKeyDown={e => deleteBackwardsCoder(e)} type="number" name="" id="" />
            </div>
            <div><p className="--textmessage --code_reset">Your code can be reset after <span ref={timeElem} className="--timer">00:00 </span><button className="hidden" onClick={()=>Timer()} ref={button} >reset code</button></p> </div>
            <p className="--textmessage">A code has been Seen To your gmail. Enter Code to validate account</p>
            <button className="rounded-corners | disable-toggle | background-primary" type="submit">Validate Account</button>
        </form>
    </div>
    </div>
 
  )
}

export default Code
