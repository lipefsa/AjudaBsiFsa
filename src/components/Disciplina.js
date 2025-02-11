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
                <Nav.Item>
                  <Nav.Link eventKey="sixth">6º Sem</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">7º Sem</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="eigth">8º Sem</Nav.Link>
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
                            As provas são difíceis, porém justas. Muitas listas de exercícios disponíveis para estudos.
                            
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
                          <Accordion.Header><s>Introdução a Programação </s> </Accordion.Header>
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
                          <strong>Resumo:</strong> Pensamento lógico, tabelas verdade, proposições, validade de argumentos, equivalência lógica e Leis de Morgan com circuitos lógicos. <br />
                            <strong>Professor:</strong> Jailson Araujo <br />
                            <strong>Feedback:</strong> Não se engane por ser do 1º Semestre. Essa matéria é uma das mais importantes do curso.   <br />
                             O que você aprender aqui vai ser aplicável em qualquer linguagem de programação e na criação de estrutura de dados e outras disciplinas daqui em diante.<br />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header><s>Leitura e Produção Textual </s> </Accordion.Header>
                          <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                          <Accordion.Header><s>Metodologia da Pesquisa Científica </s> </Accordion.Header>
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
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      <div>
                        <Accordion class="accordion">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header> <s> Cálculo II </s> </Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header> <s> Linguagem de Programação I</s></Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header> <s> Matemática Discreta </s></Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header> <s> Organização e Arquitetura de Computadores </s></Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header> <s> Teoria Geral da Administração </s></Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="5">
                          <Accordion.Header><s>Fundamentos de Sistemas de Informação </s> </Accordion.Header>
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
                            <Accordion.Header> <s> Álgebra Linear </s></Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header> <s> Análise e Modelagem de Sistemas </s></Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header> <s> Linguagem de Programação II </s></Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header> <s> Sistemas Operacionais</s></Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header> <s> Organização, Sistemas e Métodos</s></Accordion.Header>
                            <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="5">
                          <Accordion.Header><s>Teoria Geral de Sistemas </s> </Accordion.Header>
                          <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                          <Accordion.Header><s>Matemática Discreta </s> </Accordion.Header>
                          <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                          <Accordion.Header><s>Inglês I </s> </Accordion.Header>
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
                          <Accordion.Header> <s> Banco de Dados I </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header><s> Estrutura de Dados </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header><s> Interface Homem-Máquina </s> </Accordion.Header>
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
                          <strong>Resumo:</strong> Assuntos como Desvio, Médias e seus diferentes tipos, distribuição de frequência, correlação e regressão linear. <br />
                            <strong>Professora:</strong> Jailson Araujo.<br />
                            <strong>Feedback:</strong> O professor costuma realizar trabalhos e provas a cada assunto, valores são divididos de acordo com a dificuldade. É uma 
                            das disciplinas mais "fáceis" da área de matemática do curso. <br />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header><s> Redes de Computadores I </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                          <Accordion.Header><s>Inglês II </s> </Accordion.Header>
                          <Accordion.Body>
                            <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                          <Accordion.Header><s>Seminários Temáticos </s> </Accordion.Header>
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
                          <Accordion.Header><s> Banco de Dados II </s> </Accordion.Header>
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
                          <strong>Resumo:</strong> Estudo sobre a vida de um software, seus princípios, metodologias e práticas envolvidas. <br />
                          Assuntos como Scrum, Kanban, Requisitos Funcionais e Não-Funcionais de um sistema, além de ERP. <br />
                            <strong>Professor:</strong> Rabelo Filho. <br />
                            <strong>Feedback:</strong> Disciplina totalmente teórica.
                             Em todas as aulas você terá uma atividade pra realizar e não vai ter dificuldade com as provas se realizar todas.   <br />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Programação WEB</Accordion.Header>
                          <Accordion.Body>
                          <strong>Resumo:</strong> Aqui você vai aprender toda a base para criar um site completamente do zero. <br />
                          Conceitos introdutórios de Web, HTML, CSS, Javascript, PHP. <br />
                            <strong>Professor:</strong> Rabelo Filho. <br />
                            <strong>Feedback:</strong> Disciplina bastante prática.
                             Em todas as aulas você terá uma atividade pra realizar e não vai ter dificuldade com as provas e com o trabalho final se realizar todas.   <br />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header> <s> Redes de Computadores II </s></Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header> <s> Sociologia do Trabalho </s></Accordion.Header>
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
                <Tab.Pane eventKey="sixth"> <Row>
                  {
                    <div>
                      <Accordion class="accordion">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header><s> Engenharia de Software </s> </Accordion.Header>
                          <Accordion.Body> 
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header><s> Gestão de Projetos </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header><s> Sistemas Distribuídos </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header><s> Sistemas Embarcados </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header><s> TCC I </s> </Accordion.Header>
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
                <Tab.Pane eventKey="seventh"> <Row>
                  {
                    <div>
                      <Accordion class="accordion">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header><s> Desenvolvimento Mobile </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header><s> Meio Ambiente </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header><s> Projeto e Gerência de Redes </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header><s> Qualidade de Software </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header><s> TCC II </s> </Accordion.Header>
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
                <Tab.Pane eventKey="eigth"> <Row>
                  {
                    <div>
                      <Accordion class="accordion">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header><s> Estágio Supervisionado </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header><s> Governança e Gestão de TI </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header><s> Legislação Aplicada a Informática </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header><s> Segurança e Auditoria de Sistemas </s> </Accordion.Header>
                          <Accordion.Body>
                          <strong>NECESSITO DO SEU FEEDBACK! <br />
                            Preferência se você fez a disciplina semestre passado! <br /></strong>
                            Detalhes dos assuntos abordados, dificuldades, etc. <br />
                            Como as provas são feitas e como é a dinâmica da matéria. <br />
                            E sobre o professor/a: como ele/a é, como dá aula, como avalia, etc.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header><s> Trabalho Cooperativo Mediado por Computador </s> </Accordion.Header>
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
      <img src={colorSharp2} className="background-image-right" alt='Background' />
    </section>
  )
}