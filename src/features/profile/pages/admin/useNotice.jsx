import React, { useState } from 'react'
import { useSocket } from '../socket-functions/Basic'
import { useEffect } from 'react'

export function useNotice() {
    const {notifications} = useSocket()
    const [unseen,setUnseen] = useState()

    useEffect(()=>{
        const notseen = notifications?.filter(notice => !notice.seen)
        setUnseen(notseen?.length)
    },[notifications])
  return unseen
}
