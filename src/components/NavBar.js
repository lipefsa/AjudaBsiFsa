import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import logo from '../assets/img/gadsden.svg';
import github1 from '../assets/img/github1.svg';
import linkedin from '../assets/img/linkedin.svg';
import instagram from '../assets/img/instagram.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='Liberdade & Capitalismo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onclick={() => onUpdateActiveLink('home')} > Início
                        </Nav.Link>
                        <Nav.Link href="#content-curso"
                            className={activeLink === 'content-curso' ? 'active navbar-link' : 'navbar-link'}
                            onclick={() => onUpdateActiveLink('content-curso')} > Curso
                        </Nav.Link>
                        <Nav.Link href="#content-disciplina"
                            className={activeLink === 'content-disciplina' ? 'active navbar-link' : 'navbar-link'}
                            onclick={() => onUpdateActiveLink('content-disciplina')} > Disciplinas
                        </Nav.Link>
                        <Nav.Link href="#content-contact"
                            className={activeLink === 'content-contact' ? 'active navbar-link' : 'navbar-link'}
                            onclick={() => onUpdateActiveLink('content-contact')} > Contato
                        </Nav.Link>

                        <NavDropdown title="Sobre" id="basic-nav-dropdown" className={activeLink === 'sobre' ? 'active navbar-link' : 'navbar-link'}
                            onclick={() => onUpdateActiveLink('sobre')}>

                            <NavDropdown.Item href="#" className='sobrecurso' onClick={() => setShowModal1(true)}>BSI</NavDropdown.Item>
                            <NavDropdown.Item href="#" className='sobredisciplinas' onClick={() => setShowModal2(true)} >Outras Disciplinas</NavDropdown.Item>
                            <NavDropdown.Item href="#" className='sobresite' onClick={() => setShowModal3(true)}>Site</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Modal1 show={showModal1} handleClose={() => setShowModal1(false)} />
                    <Modal2 show={showModal2} handleClose={() => setShowModal2(false)} />
                    <Modal3 show={showModal3} handleClose={() => setShowModal3(false)} />

                    <span className="navbar-text">
                        <div className='social-icon'>
                            <a href='hhtps://www.github.com'> <img src={github1} alt="Github" /></a>
                            <a href='https://www.linkedin.com'> <img src={linkedin} alt="Linkedin" /></a>
                            <a href='https://www.instagram.com/ifba_fsa'> <img src={instagram} alt="Instagram" /></a>
                        </div>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

//<button className='vvd' onClick={() => console.log('connect')}>
//<span>Button</span>
//</button> 

export default NavBar;