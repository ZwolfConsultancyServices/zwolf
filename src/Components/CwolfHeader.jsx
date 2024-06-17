import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';  

const ZwolfHeader = () => {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
            expand="lg"
            className={`nav-main ${scrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : ''}`}
            fixed="top"
            expanded={expanded} 
        >
            <Container>
                <Navbar.Brand className="d-flex align-items-center gap-2">
                    <img
                        alt=""
                        src="images/blackLogo.jpeg"
                        width="50"
                        height="50"
                        className="d-inline-block align-top rounded-circle me-3"
                    />
                    <span className="h4 mb-0 d-none d-lg-block">Zwolf Consultancy Service</span>
                    <span className=" mb-0 d-block d-lg-none">Zwolf Consultancy Service</span>
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setExpanded(!expanded)} 
                    className="navbar-toggler-custom"
                >
                    <FaBars size={30} color={scrolled || expanded ? "white" : "black"} />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto nav-items">
                        <Nav.Link as={Link} to="/" className="main-li" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/services" className="main-li" onClick={() => setExpanded(false)}>Services</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="main-li" onClick={() => setExpanded(false)}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us" className="main-li" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ZwolfHeader;
