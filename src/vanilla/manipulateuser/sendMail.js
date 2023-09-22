import { auth } from "../../axios/defaults"
import { authBox } from "../authbox"
import { getCookie } from "../cookie"

export const sendMessage = async(message)=>{
    authBox(102)
    if(!message)return
    const userId = getCookie('userId')
    const token = getCookie('access_token')
    const {subject,stack,toEmail} = message
    try {
        const user = await auth.get(`/auth/user/${userId}/${token}`)
        try {
            await auth.post('/auth/sendmail',{
                subject,
                email:user.data.email,
                name:user.data.fullName,
                stack,
                toEmail
            })
            authBox(200,'Email Sent Successfull')
        } catch (err) {
            authBox(err.status,err.response.data)
        }
         
    } catch (err) {
        authBox(err.status,err.response.data)
    }

}


export const sendMail = async(e,sub,mail)=>{
    e.preventDefault()
    authBox(102)
    const subject = sub.current.value
    const stack = mail.current.value
    if(subject === '')return authBox(400,'subject can\'t be empty')
    if(stack === '') return authBox(400,'Your message must have a body')
    const message = {
      subject,
      stack,
      toEmail:'excellencejosiah@gmail.com'
    }

    await sendMessage(message)

    sub.current.value = ''
    mail.current.value = ''
  }