import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { React, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Curso } from './components/Curso';
import { Disciplinas } from './components/Disciplina';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RootLayout } from './components/Analytics';

function App() {

  useEffect(() => {
    document.title = 'Ajuda BSI FSA';
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Curso />
      <Disciplinas />
      <Contact />
      <Footer />
      <RootLayout />
    </div>
  );
}

export default App;
