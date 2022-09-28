import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';



const NavBar = () => {
     return(
          <>
             <Navbar className="color-nav" variant="dark" >
               <Container>
                    
                    <Nav className="me-auto " style={{marginLeft:"60px"}}>
                      <Nav.Item >
                         <Nav.Link href="/">Users</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                         <Nav.Link href="/posts">Posts</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                         <Nav.Link href="/todos">Todos</Nav.Link>
                         </Nav.Item>
                         
                        
                      

                    </Nav>
               </Container>
             </Navbar>
          </>
     )
}

export default NavBar;