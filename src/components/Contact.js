import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import 'semantic-ui-css/semantic.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_PUBLIC_KEY;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'AjudaBSI',
            message: message,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams,
            USER_ID).then((response) => {
                console.log('Email enviado com sucesso!', response); //response.status, response.text
                Swal.fire({
                    icon: 'success',
                    title: 'Mensagem enviada com sucesso!'
                });
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log('Ooops, algo deu errado...', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, algo deu errado... Foi mal',
                    text: error.text,
                });
            });
    }

    return (
        <section className="contact" id="content-contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contato"></img>
                    </Col>
                    <Col md={6}>
                        <h3> Quer dar sua opinião sobre alguma disciplina que está faltando? Ou talvez adicionar informações que estejam incompletas? Mande uma mensagem.</h3>
                        <form onSubmit={handleOnSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" required value={name}
                                        placeholder='Nome'
                                        onChange={(e) => setName(e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="email" required value={email}
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row={6} type="text" required value={message}
                                        placeholder='Sua mensagem aqui'
                                        onChange={(e) => setMessage(e.target.value)} />
                                    <button type="submit" className="buttonSubmit"><span>Enviar</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
