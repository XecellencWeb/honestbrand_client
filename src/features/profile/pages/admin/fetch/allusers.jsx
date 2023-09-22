import { useEffect, useState } from "react"
import { auth } from "../../../../../axios/defaults"
import { getCookie } from "../../../../../vanilla/cookie"


export function useUserAll(url) {
    const token = getCookie('access_token')
    const [loading,setLoading] = useState(false)
    const [data, setData] = useState({})
    const [err,setErr] = useState({})
    const fetch = async()=>{
        setLoading(true)
        auth.get(`${url}/${token}`).then(setData).catch(setErr).finally(()=>{
            setLoading(false)
        })
    }
    useEffect(()=>{
        fetch()
    },[url])
 return {loading,data,err}
}


