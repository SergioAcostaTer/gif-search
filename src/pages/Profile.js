import React, { useContext } from 'react'
import Avatar from '../components/Avatar/Avatar'
import HeaderTag from '../components/HeaderTag/HeaderTag'

import GlobalContext from "../context/GlobalContext"

 
const Profile = ({any}) => {

    const {user} = useContext(GlobalContext)
    
  return (
    <>
    <HeaderTag tag={"Profile"}/>
      <Avatar name={user.name} email={user.email} pic={user.picture}/>
 
    </>
  )
}
 
export default Profile