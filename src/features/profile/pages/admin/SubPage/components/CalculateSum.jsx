import { useEffect, useState } from "react"


function useTotal(array,what) {
    let total = 0 
    const [theTotal,setTheTotal] = useState()
    useEffect(()=>{
        const Total = ()=>{
            let i = 0
        while (i < array.length) {
            total += array[i][what]
            i++
        }
        setTheTotal(total)
    }
    
    array && Total()
    },[array,theTotal])

    return theTotal
}

export default useTotal
