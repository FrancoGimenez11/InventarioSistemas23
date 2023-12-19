import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import EmailIcon from '@mui/icons-material/Email';
import LaptopIcon from '@mui/icons-material/Laptop';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CallIcon from '@mui/icons-material/Call';
import LoginIcon from '@mui/icons-material/Login';
import Image from "next/image";




export default function nav (){
  return(
    <>
      <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/menu"><Image src="/image/logoCoop.png" width={35} height={35}/><b> SISTEMAS</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><EmailIcon/> Firmas de Correo</Nav.Link>
            <Nav.Link href="/printers"><LocalPrintshopIcon/> Impresoras</Nav.Link>
            <NavDropdown title="Computadoras" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/notebook"><LaptopIcon/> Notebook</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/userWin">
              <AccountBoxIcon/> Usuarios de Windows
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/anyDesk"><PointOfSaleIcon/> Cajas Externas - AnyDesk</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/directorio"><CallIcon /> Numeros Internos y Correos Electronicos</Nav.Link>
            <Nav.Link eventKey={2} href="/">
             <LoginIcon/> <b>Salir</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  );
};