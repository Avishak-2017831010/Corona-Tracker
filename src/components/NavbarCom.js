import React from 'react'
import {Navbar} from 'react-bootstrap'
import '../componentsstyle/NavbarCom.css'

function NavbarCom() {
    return (

        <div className="NavbarCom">
        <Navbar bg="#42a3ef" id="navbarNav">
        <Navbar.Brand href="#home">
          <img
            id="logo"
            src="https://i.ibb.co/ScDWvV5/Covid-Tracker.png"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
      </Navbar>           
        </div>
    )
}

export default NavbarCom
