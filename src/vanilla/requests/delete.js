import { auth } from "../../axios/defaults"
import { authBox } from "../authbox"

export const deleteData = async(url,reload,setReload)=>{
    authBox(102)
    try {
        await auth.delete(url)
        authBox(200,'Delete Successfull')
        if(reload === null)return
        setReload(!reload)
    } catch (err) {
        authBox(err.status,err.response.data)
    }
}