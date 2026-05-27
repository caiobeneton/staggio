import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vagas from './pages/Vagas';
import EditarVaga from './pages/EditarVaga';
import Empresas from './pages/Empresas';
import MinhaArea from './pages/MinhaArea';
import Candidatos from './pages/Candidatos';
import dadosIniciais from './dados.json';
import './App.css';

function App() {
  // Carrega os dados do JSON em states para simular o banco de dados
  const [vagas, setVagas] = useState(dadosIniciais.vagas);
  const [empresas, setEmpresas] = useState(dadosIniciais.empresas);
  const [candidatos, setCandidatos] = useState(dadosIniciais.candidatos);
  const [candidaturas, setCandidaturas] = useState(dadosIniciais.candidaturas);
  
  // Estado global para favoritos (ID 1 inicializado como favorito)
  const [favoritos, setFavoritos] = useState([1]);

  const toggleFavorito = (idVaga) => {
    if (favoritos.includes(idVaga)) {
      setFavoritos(favoritos.filter(id => id !== idVaga));
    } else {
      setFavoritos([...favoritos, idVaga]);
    }
  };

  const candidatarSe = (idVaga) => {
    const idCandidato = 1; // Candidato ativo padrão (João Silva)
    const jaCandidatado = candidaturas.some(c => c.id_vaga === idVaga && c.id_candidato === idCandidato);
    if (jaCandidatado) {
      alert('Você já se candidatou a esta vaga!');
      return;
    }
    const maiorId = candidaturas.length > 0 ? Math.max(...candidaturas.map(c => c.id)) : 0;
    const novaCandidatura = {
      id: maiorId + 1,
      id_vaga: idVaga,
      id_candidato: idCandidato
    };
    setCandidaturas([...candidaturas, novaCandidatura]);
    alert('Candidatura enviada com sucesso! 🚀');
  };

  const cancelarCandidatura = (idCandidatura) => {
    if (window.confirm('Tem certeza que deseja cancelar sua candidatura a esta vaga?')) {
      setCandidaturas(candidaturas.filter(c => c.id !== idCandidatura));
      alert('Candidatura cancelada com sucesso.');
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content" style={{ padding: '20px', paddingBottom: '60px' }}>
          <Routes>
            <Route path="/" element={<Home vagas={vagas} empresas={empresas} candidatos={candidatos} candidaturas={candidaturas} favoritos={favoritos} toggleFavorito={toggleFavorito} candidatarSe={candidatarSe} />} />
            <Route path="/vagas" element={<Vagas vagas={vagas} setVagas={setVagas} empresas={empresas} favoritos={favoritos} toggleFavorito={toggleFavorito} candidatarSe={candidatarSe} candidaturas={candidaturas} />} />
            <Route path="/vagas/editar/:id" element={<EditarVaga vagas={vagas} setVagas={setVagas} empresas={empresas} />} />
            <Route path="/empresas" element={<Empresas empresas={empresas} setEmpresas={setEmpresas} vagas={vagas} favoritos={favoritos} toggleFavorito={toggleFavorito} candidatarSe={candidatarSe} candidaturas={candidaturas} />} />
            <Route path="/minha-area" element={<MinhaArea candidatos={candidatos} setCandidatos={setCandidatos} candidaturas={candidaturas} cancelarCandidatura={cancelarCandidatura} vagas={vagas} empresas={empresas} favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
            <Route path="/candidatos" element={<Candidatos candidatos={candidatos} setCandidatos={setCandidatos} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
