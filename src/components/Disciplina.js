import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import React from 'react';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { Accordion } from 'react-bootstrap';

export const Disciplinas = () => {

  return (
    <section className="disciplina" id="content-disciplina">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__bounceInUp' : ''}>
                  <h2>Disciplinas</h2>
                  <p>Infos sobre algumas matérias que você vai enfrentar! </p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="disciplinas-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                <Nav.Item>
                  <Nav.Link eventKey="first">1º Sem</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2º Sem</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">3º Sem</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">4º Sem</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="five">5º Sem</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first"> <Row>
                  {
                    <div>
                      <Accordion class="accordion">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Cálculo I</Accordion.Header>
                          <Accordion.Body>
                            <strong>Resumo:</strong> Uma das matérias mais difíceis do curso caso você não tenha uma base muito sólida em matemática. <br />
                            Espere por muitas funções, derivadas, integrais e limites. <br />
                            <strong>Professor:</strong> Osnildo Carvalho. <br />
                            <strong>Feedback:</strong> Aula muito densa de assuntos, porém professor é compreensível. Ele entende e ensina bem, mas também cobra que você aprenda.
                            As provas são difíceis, então estude pra caramba.
                            
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Filosofia e Ética</Accordion.Header>
                          <Accordion.Body>
                            <strong>Resumo:</strong> Aqui você provavelmente vai ver o que é filosofia de verdade pela primeira vez. <br />
                            A professora traz boas indagações e textos para discussão que vão te fazer pensar e muito para responder. <br />
                            <strong>Professora:</strong> Aletuza Leite. <br />
                            <strong>Feedback:</strong> Aula bem legal, sempre em círculos na sala. Você sabe o que é um Dasein? Se uma árvore cai na floresta e ninguém escutou 
                            ela cair, ela fez barulho? E se ela não caiu? E se ela não existe? <br />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Introdução a Programação</Accordion.Header>
                          <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>Lógica para Computação</Accordion.Header>
                          <Accordion.Body>
                          <strong>Resumo:</strong> Pensamento lógico, tabelas verdade, proposições, validade de argumentos e equivalência lógica. <br />
                            <strong>Professor:</strong> Jailson Araujo <br />
                            <strong>Feedback:</strong> Não se engane por ser do 1º Semestre. Essa matéria é uma das mais importantes do curso.   <br />
                             O que você aprender aqui vai ser aplicável em qualquer linguagem de programação e na criação de estrutura de dados e outras disciplinas daqui em diante.<br />
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  }
                </Row></Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      <div>
                        <Accordion class="accordion">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Cálculo II</Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Linguagem de Programação I</Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Matemática Discreta</Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>Organização e Arquitetura de Computadores</Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header>Teoria Geral da ADM</Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    }
                  </Row></Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      <div>
                        <Accordion class="accordion">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Álgebra Linear</Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>A.M.S</Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Linguagem de Programação II</Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>Sistemas Operacionais</Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header>O.S.M</Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    }
                  </Row></Tab.Pane>
                <Tab.Pane eventKey="fourth"> <Row>
                  {
                    <div>
                      <Accordion class="accordion">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Banco de Dados I</Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Estrutura de Dados</Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Interface Homem-Máquina</Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>Probabilidade e Estatística</Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>Redes de Computadores I</Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  }
                </Row></Tab.Pane>
                <Tab.Pane eventKey="five"> <Row>
                  {
                    <div>
                      <Accordion class="accordion">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Banco de Dados II</Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Processo de Desenvolvimento de Software</Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Programação WEB</Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>Redes de Computadores II</Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  }
                </Row></Tab.Pane>

              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" alt='Background IMG' />
    </section>
  )
}