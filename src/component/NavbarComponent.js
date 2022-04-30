import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Navbar, Container, Nav, Button, Offcanvas, NavDropdown, Form, FormControl} from 'react-bootstrap';
import EzeelinkIcon from '../assets/icon/ezee_icon.svg'
import dropdown from '../assets/icon/dropdown.svg'
import './navbar.css'

function NavbarComponent() {
  return (
    <>
    {/* <Navbar>
        <Container>
            <Navbar.Brand href="#home">
                <img alt="" src={EzeelinkIcon}/>
            </Navbar.Brand>
            <Nav className="me-auto" style={{paddingLeft: '30%'}}>
                <Nav.Link href="#home" className='item-navbar'>Products & Services <img alt="" src={dropdown}/></Nav.Link>
                <Nav.Link href="#features" className='item-navbar'>Merchant & Partner</Nav.Link>
                <Nav.Link href="#pricing" className='item-navbar'>About Us <img alt="" src={dropdown}/></Nav.Link>
                <Nav.Link href="#pricing" className='item-navbar'>FAQ</Nav.Link>
                <Nav.Link href="#pricing" className='item-navbar'>EN | <span style={{color: '#FFFFFF'}}>ID</span></Nav.Link>
            </Nav>
        </Container>
    </Navbar> */}
    <Navbar expand="lg" style={{width: '104%'}}>
      <Container>
        <Navbar.Brand href="#home">
            <img alt="" src={EzeelinkIcon}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{paddingLeft: '30%'}}>
                <Nav.Link href="#home" className='item-navbar'>Products & Services <img alt="" src={dropdown}/></Nav.Link>
                <Nav.Link href="#features" className='item-navbar'>Merchant & Partner</Nav.Link>
                <Nav.Link href="#pricing" className='item-navbar'>About Us <img alt="" src={dropdown}/></Nav.Link>
                <Nav.Link href="#pricing" className='item-navbar'>FAQ</Nav.Link>
                <Nav.Link href="#pricing" className='item-navbar'>EN | <span style={{color: '#FFFFFF'}}>ID</span></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComponent