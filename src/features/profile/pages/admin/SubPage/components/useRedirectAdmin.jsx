import { useEffect } from "react"
import { getCookie } from "../../../../../../vanilla/cookie"
import { auth } from "../../../../../../axios/defaults"
import { useLocation, useNavigate } from "react-router-dom"
import { authBox } from "../../../../../../vanilla/authbox"

function useRedirectAdmin() {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    useEffect(()=>{
        const checkAdmin = async()=>{
            const userId = getCookie('userId')
            const token = getCookie('access_token')
            if(!userId) return navigate('/')
            try {
                const {data} = await auth(`/auth/user/${userId}/${token}`)
                if(!data.isAdmin)return navigate('/profile')
            } catch (err) {
                authBox(err.status,err.response.data)
            }
        }
        checkAdmin()
      },[pathname])
}

export default useRedirectAdmin
