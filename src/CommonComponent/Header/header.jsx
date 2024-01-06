import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
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
                            <div className="our_app_button display-none">
                                <NavLink to="https://apps.apple.com/in/app/toneop-health-and-fitness-app/id1586794292" target="_blank">Our App</NavLink>
                            </div>
                        </Navbar.Brand>
                    </Navbar>
                </Container>
            </section>    
        </>
    )
}

export default Header;