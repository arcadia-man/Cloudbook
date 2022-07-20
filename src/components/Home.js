import React from 'react'
import Notes from './Notes'
import Feature from './Feature'
import Profile from './Profile'
const Home = () => {
  
  return (
    <div className='bg-black'>
      <Profile/>
       <Feature/>
      <Notes/>
    </div>
  )
}

export default Home