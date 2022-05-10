import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Navbar, Container, Nav, Button, Offcanvas, NavDropdown, Form, FormControl} from 'react-bootstrap';
import EzeelinkIcon from '../assets/icon/ezee_icon.svg'
import { useHistory, Link} from 'react-router-dom';
import dropdown from '../assets/icon/dropdown.svg'
import './navbar.css'

function NavbarComponent() {
  const history = useHistory();

  function linkToProductsAndServices(e){
    e.preventDefault();
    // history.push('/productsandservices');
    // window.location.reload();
  }

  function navigateToSection(section){
    history.push('/productsandservices', {section: section});
    window.location.reload();
  }

  function aboutUsHandle() {
    history.push('/AboutUs');
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
                        <td><NavDropdown.Item onClick={() => navigateToSection('qris')}>QRIS</NavDropdown.Item></td>
                        <td><NavDropdown.Item onClick={() => navigateToSection('eMoney')}>Electronic Money</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('trfpayment')}>Transfer Payment</NavDropdown.Item></td>
                        <td><NavDropdown.Item onClick={() => navigateToSection('voucher')}>Voucher</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('wallet')}>Wallet</NavDropdown.Item></td>
                        <td><NavDropdown.Item onClick={() => navigateToSection('billsCredit')}>Bills & Credits</NavDropdown.Item></td>
                      </tr>
                      <tr>
                        <td><NavDropdown.Item onClick={() => navigateToSection('loyalty')}>Loyalty</NavDropdown.Item></td>
                      </tr>
                    </tbody>
                  </table>
                </NavDropdown>
                <Nav.Link href="#features" className='item-navbar'>Merchant & Partner</Nav.Link>
                <NavDropdown title="About Us" className='item-navbar navbar-aboutus' id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/aboutus" style={{fontWeight: 600}}>Company Profile</NavDropdown.Item>
                  <br/>
                  <NavDropdown.Item href="/aboutus" style={{fontWeight: 600}}>Our Vision</NavDropdown.Item>
                  <br/>
                  <NavDropdown.Item href="/aboutus" style={{fontWeight: 600}}>Our Journey</NavDropdown.Item>
                  <br/>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/aboutus" style={{fontWeight: 600}}>Career</NavDropdown.Item>
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