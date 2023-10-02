import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/gadsden.svg';
import linkedin from '../assets/img/linkedin.svg';
import github1 from '../assets/img/github1.svg';
import instagram from '../assets/img/instagram.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href="https://www.github.com"> <img src={github1} alt='Github Logo'/></a>
                            <a href="https://www.linkedin.com"> <img src={linkedin} alt='Linkedin Logo' /></a>
                            <a href="https://www.instagram.com/ifba_fsa"> <img src={instagram} alt='Instagram Logo'/></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}