import { useEffect, useState } from "react"
import { auth } from "../defaults"
import { useLocation } from "react-router-dom"


export function useFetch(url) {
  const[loading,setLoading] = useState(false)
  const[data, setData] = useState()
  const[err, setErr] = useState({})
  const [reload, setReload] = useState(false)
  const {pathname} = useLocation()
  useEffect(()=>{
        setLoading(true)
        const fetch = async()=>{
       try {
          const {data} = await auth(url)
          setData(data)
       } catch (err) {
        console.log(err.response)
         setErr(err.response)
       }
       setLoading(false)
      }
      fetch()
  },[url,pathname,reload])
  return {loading,data,err,reload,setReload}
}

