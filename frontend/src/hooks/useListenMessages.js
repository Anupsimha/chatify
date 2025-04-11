import React, { useEffect } from 'react'

import {useSocketContext} from '../context/SocketContext'
import useConversations from '../zustand/useConversation'

import notifications from '../assets/sounds/notification.mp3'

const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages , setMessages} = useConversations()

  useEffect(() => {
    socket?.on("newMessage" , (newMessage) => {
        newMessage.shouldShake = true;
        const sound = new Audio(notifications);
        sound.play();
        setMessages([...messages , newMessage])
    })

    return () => {
        socket?.off("newMessage");
    }
    } , [socket , setMessages , messages])
}

export default useListenMessages
