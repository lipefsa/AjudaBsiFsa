import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import per10 from '../assets/img/10-percent.png';
import per20 from '../assets/img/20-percent.png';
import per50 from '../assets/img/50-percent.png';
import colorSharp from '../assets/img/color-sharp.png';


export const Curso = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    return (
        <section className="curso" id="content-curso">
            <Container>
                <Row>
                    <Col>
                        <div className="cursos-box">
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? 'animate__animated animate__bounceInUp' : ''}>
                                        <h2>
                                            Conteúdo do Curso
                                        </h2>
                                        <p>Percentual da grade do curso por categoria</p>
                                    </div>}
                            </TrackVisibility>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={per50} alt="Image" />
                                    <h5> Programação & TI </h5>
                                </div>
                                <div className="item">
                                    <img src={per20} alt="Image" />
                                    <h5> Matemática </h5>
                                </div>
                                <div className="item">
                                    <img src={per20} alt="Image" />
                                    <h5> Administração & Gestão </h5>
                                </div>
                                <div className="item">
                                    <img src={per10} alt="Image" />
                                    <h5> Outros </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}