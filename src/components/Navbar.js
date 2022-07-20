import React, { useState, useContext, useEffect } from 'react';
import {
  MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBNavbarBrand, MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import userContext from '../context/UserContext';
const Navbar = () => {
  const [showNavColor, setShowNavColor] = useState(false);
  const context = useContext(userContext);
  const {user} =context;
  

  return (
    <div>
      <MDBNavbar expand='lg' dark bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='fs-3'>
            Cloud Book
          </MDBNavbarBrand>

          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              {!user.stat &&(<MDBNavbarItem className=' my-2' >
                <Link className="text-white mx-2 text-decoration-none" to="/" >Home</Link>
              </MDBNavbarItem>)}
              {user.stat && (
              <MDBNavbarItem className='my-2' >
                <Link className="text-white mx-2 text-decoration-none" to="/components/Home">Home</Link>
              </MDBNavbarItem>
              )}
              <MDBNavbarItem className='my-2' >
                <Link className={`text-white mx-2 text-decoration-none`} to="/components/Contact">Contact</Link>
              </MDBNavbarItem>
              <MDBNavbarItem className='my-2' >
                <Link className="text-white mx-2 text-decoration-none" to="/components/About">About</Link>
              </MDBNavbarItem>
     
              {!user.stat &&(
              <MDBNavbarItem className='my-2' >
                <Link className="text-white mx-2 text-decoration-none" to="/components/Login">Login</Link>
              </MDBNavbarItem>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>

      </MDBNavbar>


    </div>
  )
}

export default Navbar