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
                          <strong>Resumo:</strong> Pensamento lógico, tabelas verdade, proposições, validade de argumentos, equivalência lógica e Leis de Morgan com circuitos lógicos. <br />
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
                          <strong>Resumo:</strong> A matéria é inicialmente introduzida por meio assuntos como álgebra relacional e modelo relacional. < br/>
                           Posteriormente a matéria segue utilizando MySQL Workbench explicando estruturas básicas e assuntos pilares, 
                           como os comandos básicos usados em banco e a lógica para sua construção na prática. <br />
                            <strong>Professora:</strong> Alessa Oliveira.<br />
                            <strong>Feedback:</strong> Aulas interativas e em laboratório,
                             os conteúdos geralmente são cobrados por meio de atividades semanais que te fazem estudar e praticar frequentemente, te fazendo assim ter uma boa linha de aprendizado. <br />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Estrutura de Dados</Accordion.Header>
                          <Accordion.Body>
                          <strong>Resumo:</strong> Uma matéria super importante (e difícil), pois junta muita teoria e prática. <br />
                           Necessita de forte lógica de programação e conhecimento em alguma linguagem (que você deve adquirir em LP1 e LP2). <br />
                           Assuntos normalmente são: listas, pilhas, filas, árvores binárias, grafos. <br /> 
                            <strong>Professora:</strong> Ana Carolina Sokolonski.<br />
                            <strong>Feedback:</strong> Assuntos são bem densos e não tem como escapar, não é nada impossível mas demanda dedicação e prática de algoritmos ao chegar em casa após a aula.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Interface Homem-Máquina</Accordion.Header>
                          <Accordion.Body>
                          <strong>Resumo:</strong> Matéria que aborda a teoria do que seria o Front-End com UX/UI. <br />
                          Faz pensar no bem estar e experiência dos usuários ao utilizar um sistema. <br />
                            <strong>Professora:</strong> Alessa Oliveira.<br />
                            <strong>Feedback:</strong> Disciplina tranquila e teórica. Faça as atividades solicitadas e presta atenção que não vai ter problemas. <br />
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
                          <Accordion.Header>Redes de Computadores I</Accordion.Header>
                          <Accordion.Body>
                          <strong>Resumo:</strong> Uma das disciplinas mais complicadas do curso e com alta taxa de reprovação. <br />
                          Conteúdos densos e muita teoria. Espere por assuntos como: Camadas da rede (física, enlace, transporte, aplicação, etc), comutação, colisão, padrões ethernet e outros. <br />
                            <strong>Professor:</strong> Fernando Bulhões. <br />
                            <strong>Feedback:</strong> Necessita de revisão na grade curricular e metodologia de ensino por parte da docência e diretoria do campus.
                             Existem muitas reclamações dos estudantes sobre a disciplina ser "injusta". <br /> 
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
                          <strong>Resumo:</strong> A professora avança nos assuntos visto em Banco de Dados I e introduz vários novos que possibilitam o trabalho real no dia a dia em empresas com grandes quantidades de informações. < br/>
                           Você verá: Triggers, Procedures, Views, Inner Joins avançados e outros comandos complexos. <br />
                            <strong>Professora:</strong> Alessa Oliveira.<br />
                            <strong>Feedback:</strong> Aulas interativas e em laboratório. Aproveite para treinar bastante e tirar dúvidas. A prova tem o costume de ser difícil. <br />
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