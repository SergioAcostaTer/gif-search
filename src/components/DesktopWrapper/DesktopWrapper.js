import React from 'react'
import './DesktopWrapper.css'
 
const DesktopWrapper = ({children}) => {
  return (
    <>
 
       <div className='desktop-container'>
        <div className='desktop-wrapper'>
         {children}
        </div>
       </div>
 
    </>
  )
}
 
export default DesktopWrapper