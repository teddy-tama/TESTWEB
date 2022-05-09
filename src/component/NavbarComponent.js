import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Navbar, Container, Nav, Button, Offcanvas, NavDropdown, Form, FormControl} from 'react-bootstrap';
import EzeelinkIcon from '../assets/icon/ezee_icon.svg'
import { useHistory } from 'react-router-dom';
import dropdown from '../assets/icon/dropdown.svg'
import './navbar.css'

function NavbarComponent() {
  const history = useHistory();

  function linkToProductsAndServices(e){
    e.preventDefault();
    history.push('/productsandservices');
    window.location.reload();
  }

  return (
    <>
    <Navbar expand="lg" style={{width: '100%'}}>
      <Container>
        <Navbar.Brand href="#home">
            <img alt="" src={EzeelinkIcon}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{paddingLeft: '30%'}}>
                <NavDropdown title="Products & Services" onClick={(e) => linkToProductsAndServices(e)} className='item-navbar navbar-products' id="collasible-nav-dropdown">
                  <table className="table-products-item">
                    <thead>
                      <th>Corporate and SME</th>
                      <th>Consumer</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><NavDropdown.Item href="#action/3.1">QRIS</NavDropdown.Item></td>
                        <td><NavDropdown.Item href="#action/3.1">Electronic Money</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item href="#action/3.1">Transfer Payment</NavDropdown.Item></td>
                        <td><NavDropdown.Item href="#action/3.1">Voucher</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item href="#action/3.1">Wallet</NavDropdown.Item></td>
                        <td><NavDropdown.Item href="#action/3.1">Bills & Credits</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item href="#action/3.1">Loyalty</NavDropdown.Item></td>
                      </tr>
                    </tbody>
                  </table>
                </NavDropdown>
                <Nav.Link href="#features" className='item-navbar'>Merchant & Partner</Nav.Link>
                <NavDropdown title="About Us" className='item-navbar navbar-aboutus' id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" style={{fontWeight: 600}}>Company Profile</NavDropdown.Item>
                  <br/>
                  <NavDropdown.Item href="#action/3.2">Our Vision</NavDropdown.Item>
                  <br/>
                  <NavDropdown.Item href="#action/3.3">Our Journey</NavDropdown.Item>
                  <br/>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Career</NavDropdown.Item>
                </NavDropdown>
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