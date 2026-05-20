import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vagas from './pages/Vagas';
import EditarVaga from './pages/EditarVaga';
import Empresas from './pages/Empresas';
import Candidatos from './pages/Candidatos';
import dadosIniciais from './dados.json';
import './App.css';

function App() {
  // Carrega os dados do JSON em states para simular o banco de dados
  const [vagas, setVagas] = useState(dadosIniciais.vagas);
  const [empresas, setEmpresas] = useState(dadosIniciais.empresas);
  const [candidatos, setCandidatos] = useState(dadosIniciais.candidatos);
  const [candidaturas, setCandidaturas] = useState(dadosIniciais.candidaturas);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content" style={{ padding: '20px', paddingBottom: '60px' }}>
          <Routes>
            <Route path="/" element={<Home vagas={vagas} empresas={empresas} candidatos={candidatos} candidaturas={candidaturas} />} />
            <Route path="/vagas" element={<Vagas vagas={vagas} setVagas={setVagas} empresas={empresas} />} />
            <Route path="/vagas/editar/:id" element={<EditarVaga vagas={vagas} setVagas={setVagas} empresas={empresas} />} />
            <Route path="/empresas" element={<Empresas empresas={empresas} setEmpresas={setEmpresas} />} />
            <Route path="/candidatos" element={<Candidatos candidatos={candidatos} setCandidatos={setCandidatos} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
