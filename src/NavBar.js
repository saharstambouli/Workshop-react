import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navigation'>
        <div className='logo'>
            
            {/* old way */}
            {/* <h1 style="color:white;"> logo </h1> */}
            
            {/* new way */}
            <h1 style={{color:"white"}}> logo </h1>
        </div>
        

        <div className='list'>
            {/* old way */}
            {/* <h1 style="color:white;"> menu </h1> */}
             
             {/* new way */}
            <h1 style={{color:"white"}}> menu </h1>

        </div>

    </div>
  )
}

export default NavBar