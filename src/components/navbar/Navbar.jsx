import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className='d-flex justify-content-around align-items-center bg-dark text-white' style={{height:'50px'}}>
          <div className="logo text-info">
            <b>CALCULATOR </b>
          </div>
       </nav>
    </div>
  )
}

export default Navbar
