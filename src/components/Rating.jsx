import { useEffect, useRef, useState } from "react"
import { StarFill } from "react-bootstrap-icons"
import { getCookie } from "../vanilla/cookie"
import { auth } from "../axios/defaults"
import { authBox } from "../vanilla/authbox"

function Rating() {
    const userId = getCookie('userId')
    const item = useRef()
    
    const size = 30
    const rating = useRef()
    const [rated,setRated] = useState(3)

    const setRating = async()=>{
        authBox(102)
        const itemId = item.current.getAttribute('data-id')
        try {
           const {data} = await auth.put(`/items/rateitem/${itemId}`,{userId,rated})
           authBox(200,data)
        } catch (err) {
            authBox(err.status,err.response.data)
        }
        
    }
    useEffect(()=>{
        const ratings = document.querySelector('[data-type=ratings]')
        const rate = (target) => {
            const clicked = target
            clicked.id && setRated(parseInt(clicked.id))
        }
           ratings.addEventListener('click',(e)=> {
           rate(e.target.parentNode)
        })
            ratings.onmouseover = (e)=>rate(e.target.parentNode)
    },[rated])
  return (
    <div className="group">
        <input ref={item} data-id='' type="checkbox" className="hidden peer" name="toggle-rating" id="toggle-rating" />
        <div className="fixed top-0 left-0 hidden peer-checked:block bg-white bg-opacity-75 w-screen h-screen" style={{zIndex:'1000000'}}>
        <label htmlFor="toggle-rating" className="bg-red-400 text-white absolute top-0 left-0">Close</label>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-20 rounded-lg shadow-md w-96 h-96 flex flex-col justify-center items-center">
                <div className=" ">
                    <p className="text-center ">{rated}</p>
                </div>
                <div className="flex flex-row-reverse mb-12 " data-type="ratings">
                <StarFill ref={rating} id = '5' size={size} className={`${rated === 5 && 'selected'} mx-3`}/>
                <StarFill ref={rating} id = '4' size={size} className={`${rated === 4 && 'selected'} mx-3`}/>
                <StarFill ref={rating} id = '3' size={size} className={`${rated === 3 && 'selected'} mx-3`}/>
                <StarFill ref={rating}  id = '2' size={size} className={`${rated === 2 && 'selected'} mx-3`}/>
                <StarFill ref={rating} id = '1' size={size} className={`${rated === 1 && 'selected'} mx-3`}/>
                </div>
                <button onClick={setRating} className="bg-orange-400 text-white">Rate</button>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Rating
