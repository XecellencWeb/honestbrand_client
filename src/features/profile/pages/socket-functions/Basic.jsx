import {createContext, useContext, useEffect, useState} from 'react'
import { getCookie } from '../../../../vanilla/cookie'
import { useAuthContext } from '../../../../contexts/auth'
import { socket } from '../../../../components/socket'


const socketContext = createContext()


function Basic({children}) {
    
    const {state} = useAuthContext()
    const {userId} = state
    const id = userId || getCookie('userId')
    const [status,setStatus] = useState('offline')
    const [notifications,setNotifications] = useState([])
    const [isnew,setIsnew] = useState(false)

    useEffect(()=>{
        socket.on('connect',()=>{
            setStatus('online')
            socket.emit('join-room',id)
        })
        
    },[state])
     
    useEffect(()=>{
            setTimeout(()=>{
                setIsnew(false)
            },10000)
    },[notifications])

    useEffect(()=>{

        socket.on('reconnect',()=>{
            setStatus('online')
            socket.emit('join-room',id)
        })
        
        socket.on('new-notification',news=>{
            setNotifications(prev => [news,...prev])
            setIsnew(true)
        })
        
        socket.on('disconnect',()=>{
            setStatus('offline')
         })
        
         return () => {
            // Clean up event listeners when the component unmounts
            socket.off('new-notification');
          };
    },[])
    
    
    const sendNotification = (news,room)=>{
        // if(room === id){
        //     setNotifications(prev => [news,...prev])
        //     return
        // }
        
            socket.emit('send-notification',news,room)
    }
        
        
    

     

     
  return <socketContext.Provider value={{status,notifications,isnew,setNotifications,sendNotification}}>
        {children}
  </socketContext.Provider>
}

export default Basic

export function useSocket (){
    return useContext(socketContext)
}