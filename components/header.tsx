
import Link from 'next/link';
import Styles from './header.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// as = what yu would liek your link to look like
// href is the atual path to your template
// the other normal Link pages will do a static full page reload

export default function Header (){
    return(
        <>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Movies</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{color:"blue"}} href="/">Home</Nav.Link>
      <Nav.Link style={{color:"blue"}} href="/about">About</Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </>
    );
} 