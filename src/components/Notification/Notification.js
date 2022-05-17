import './Notification.css'
import { useState, createContext, useContext } from 'react'


 const Notification = ({ message , severity , otherClass = 'Mensaje' }) => {
    const notificationStyles = {      
        right: severity === 'sucess' ? 5 : 0,           
    }
    
    if (message === ''){
      return null
    }

    const config = true ?
    {
      style: notificationStyles,
      className: `${severity === 'success' ? 'Success' : 'Error'} ${otherClass || ''}`
    } : {}


    return (      
        <div {...config}>        
          {message}
        </div>
      )
    }

    const NotificationContext = createContext()


export const NotificationProvider = ({ children }) => {

    const [ message, setMessage] = useState('')
    const [ severity, setSeverity] = useState ('success')

    const setNotification = (sev, msg) => {
      setMessage(msg)
      setSeverity(sev)
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }  

    return (
    <NotificationContext.Provider value = {{ setNotification}}>
      <Notification message= { message } severity = { severity } />
      { children }  
    </NotificationContext.Provider>
    )
  }

export const useNotification = () => {
  return useContext (NotificationContext)
}

