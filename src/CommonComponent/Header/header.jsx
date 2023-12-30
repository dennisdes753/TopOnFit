import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';
import {Logo} from '../../asset/img';
import './header.scss';

function Header() {
    return (
        <>
            <section className="topnav">
                <Container>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Navbar.Brand href="#home">
                            <Image className="img-fluid" src={Logo} alt="ToponFirLogo"/>
                        </Navbar.Brand>
                    </Navbar>
                </Container>
            </section>    
        </>
    )
}

export default Header;