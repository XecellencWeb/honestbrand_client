import { auth } from "../axios/defaults"
import { generate } from "./rannogen"

export const NavigateToSection = async(type,email,e)=>{
    e?.stopPropagation()
    const pages = document.querySelectorAll('[data-section = true]')
    let i = 0
    const offPages = ()=>{
    while(i < pages.length){
        pages[i].checked = true
        i++
    }
}
offPages()
if(!type)return offPages()
    const page = document.querySelector(`[data-type=${type}]`)
    page.checked = false
    if(type === 'code' && email){
        console.log('its working ')
        const code = generate(6).toString().replace(/,/g,'')
        document.cookie = `code=${code}; max-age=${60*5}`
        try {
            const {data} = await auth.post('/auth/sendcode',{code,email})
                console.log(data)
        } catch (err){
            console.log(err.response)
        }
    }
    
}