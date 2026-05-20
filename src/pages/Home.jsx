import React from 'react';

function Home({ vagas, empresas }) {
  return (
    <div>
      <h1>Bem-vindo ao Sistema de Vagas</h1>
      <p>Este é o painel principal do sistema.</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', minWidth: '200px' }}>
          <h2>Total de Vagas</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{vagas.length}</p>
        </div>
        
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', minWidth: '200px' }}>
          <h2>Total de Empresas</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{empresas.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
