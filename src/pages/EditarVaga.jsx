import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarVaga({ vagas, setVagas, empresas }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [salario, setSalario] = useState('');
  const [idEmpresa, setIdEmpresa] = useState('');

  useEffect(() => {
    // Procura a vaga pelo ID passado na rota
    const vagaAtual = vagas.find(v => v.id === Number(id));
    if (vagaAtual) {
      setTitulo(vagaAtual.titulo);
      setDescricao(vagaAtual.descricao);
      setSalario(vagaAtual.salario);
      setIdEmpresa(vagaAtual.id_empresa);
    } else {
      alert('Vaga não encontrada!');
      navigate('/vagas');
    }
  }, [id, vagas, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !descricao || !salario || !idEmpresa) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    // Atualiza a vaga no array
    const vagasAtualizadas = vagas.map(v => {
      if (v.id === Number(id)) {
        return {
          ...v,
          titulo,
          descricao,
          salario: Number(salario),
          id_empresa: Number(idEmpresa)
        };
      }
      return v;
    });

    setVagas(vagasAtualizadas);
    alert('Vaga atualizada com sucesso!');
    navigate('/vagas'); // Retorna para a listagem
  };

  return (
    <div>
      <h1>Editar Vaga (ID: {id})</h1>
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Título da Vaga: </label>
            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required style={{ width: '100%', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Descrição: </label>
            <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required style={{ width: '100%', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Salário (R$): </label>
            <input type="number" value={salario} onChange={e => setSalario(e.target.value)} required style={{ width: '100%', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Empresa: </label>
            <select value={idEmpresa} onChange={e => setIdEmpresa(e.target.value)} required style={{ width: '100%', padding: '5px' }}>
              <option value="">Selecione uma empresa</option>
              {empresas.map(emp => (
                <option key={emp.id} value={emp.id}>{emp.nome}</option>
              ))}
            </select>
          </div>
          <button type="submit" style={{ marginRight: '10px', padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Salvar Alterações</button>
          <button type="button" onClick={() => navigate('/vagas')} style={{ padding: '10px 15px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default EditarVaga;
