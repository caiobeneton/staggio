import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Vagas({ vagas, setVagas, empresas }) {
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novoSalario, setNovoSalario] = useState('');
  const [novaEmpresaId, setNovaEmpresaId] = useState('');

  // Pega o nome da empresa a partir do ID
  const getNomeEmpresa = (id_empresa) => {
    const empresa = empresas.find(e => e.id === Number(id_empresa));
    return empresa ? empresa.nome : 'Desconhecida';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!novoTitulo || !novaDescricao || !novoSalario || !novaEmpresaId) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    // Lógica para gerar o novo ID: pega o maior ID atual e soma 1
    const maiorId = vagas.length > 0 ? Math.max(...vagas.map(v => v.id)) : 0;
    const novaVaga = {
      id: maiorId + 1,
      titulo: novoTitulo,
      descricao: novaDescricao,
      salario: Number(novoSalario),
      id_empresa: Number(novaEmpresaId)
    };

    // Atualiza o state com a nova vaga
    setVagas([...vagas, novaVaga]);
    alert('Vaga cadastrada com sucesso!');
    
    // Limpa o formulário
    setNovoTitulo('');
    setNovaDescricao('');
    setNovoSalario('');
    setNovaEmpresaId('');
  };

  const handleExcluir = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta vaga?')) {
      const vagasFiltradas = vagas.filter(vaga => vaga.id !== id);
      setVagas(vagasFiltradas);
      alert('Vaga excluída com sucesso!');
    }
  };

  return (
    <div>
      <h1>Gerenciar Vagas</h1>
      
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h2>Adicionar Nova Vaga</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Título da Vaga: </label>
            <input type="text" value={novoTitulo} onChange={e => setNovoTitulo(e.target.value)} required />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Descrição: </label>
            <input type="text" value={novaDescricao} onChange={e => setNovaDescricao(e.target.value)} required />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Salário (R$): </label>
            <input type="number" value={novoSalario} onChange={e => setNovoSalario(e.target.value)} required />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Empresa: </label>
            <select value={novaEmpresaId} onChange={e => setNovaEmpresaId(e.target.value)} required>
              <option value="">Selecione uma empresa</option>
              {empresas.map(emp => (
                <option key={emp.id} value={emp.id}>{emp.nome}</option>
              ))}
            </select>
          </div>
          <button type="submit" style={{ padding: '5px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Cadastrar Vaga</button>
        </form>
      </div>

      <h2>Lista de Vagas</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Salário</th>
            <th>Empresa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vagas.length > 0 ? vagas.map(vaga => (
            <tr key={vaga.id}>
              <td>{vaga.id}</td>
              <td>{vaga.titulo}</td>
              <td>{vaga.descricao}</td>
              <td>R$ {vaga.salario}</td>
              <td>{getNomeEmpresa(vaga.id_empresa)}</td>
              <td>
                <Link to={`/vagas/editar/${vaga.id}`}>
                  <button style={{ marginRight: '10px', backgroundColor: '#ffc107', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}>Editar</button>
                </Link>
                <button onClick={() => handleExcluir(vaga.id)} style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}>Excluir</button>
              </td>
            </tr>
          )) : (
            <tr><td colSpan="6" style={{ textAlign: 'center' }}>Nenhuma vaga cadastrada.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Vagas;
