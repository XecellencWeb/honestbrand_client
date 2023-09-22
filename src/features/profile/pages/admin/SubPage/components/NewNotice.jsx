import { useSocket } from "../../../socket-functions/Basic"
import {Link} from 'react-router-dom'

function NewNotice() {
    const {isnew,notifications:notice} = useSocket()

    if(isnew){
        return <Link to='/profile/notification/#0' className="notice_animation cursor-pointer hover:scale-90 hover:bg-gray-50 w-full block m-8 rounded-lg max-w-3xl min-h-max p-20 shadow-lg shadow-gray-500 bg-white fixed bottom-0 right-0" style={{zIndex:999999999}}>
            <h1 className="font-serif mb-4">{notice[0]?.heading?.slice(0,20)+'.................'}</h1>
            <p className="text-base text-gray-700">{notice[0]?.message?.slice(0,100)+'................'}</p>
        </Link>
    }
}

export default NewNotice
