import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarVaga({ vagas, setVagas, empresas }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'novo';

  const [titulo, setTitulo] = useState('');
  const [empresaId, setEmpresaId] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [tipo, setTipo] = useState('CLT');
  const [modalidade, setModalidade] = useState('Presencial');
  const [bolsa, setBolsa] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (!isNew) {
      const vagaAtual = vagas.find(v => v.id === Number(id));
      if (vagaAtual) {
        setTitulo(vagaAtual.titulo || '');
        setEmpresaId(vagaAtual.id_empresa || '');
        setLocalizacao(vagaAtual.localizacao || '');
        setTipo(vagaAtual.tipo || 'CLT');
        setModalidade(vagaAtual.modalidade || 'Presencial');
        setBolsa(vagaAtual.bolsa || '');
        setDescricao(vagaAtual.descricao || '');
      } else {
        alert('Vaga não encontrada!');
        navigate('/vagas');
      }
    }
  }, [id, vagas, navigate, isNew]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !empresaId || !descricao) {
      alert('Título, Empresa e Descrição são obrigatórios!');
      return;
    }

    if (isNew) {
      const maiorId = vagas.length > 0 ? Math.max(...vagas.map(v => v.id)) : 0;
      const novaVaga = {
        id: maiorId + 1,
        titulo,
        descricao,
        salario: Number(bolsa),
        bolsa: bolsa ? `R$ ${bolsa}` : 'A combinar',
        id_empresa: Number(empresaId),
        localizacao,
        tipo,
        modalidade
      };
      setVagas([...vagas, novaVaga]);
      alert('Vaga publicada com sucesso!');
    } else {
      const vagasAtualizadas = vagas.map(v => {
        if (v.id === Number(id)) {
          return {
            ...v,
            titulo,
            descricao,
            salario: Number(bolsa),
            bolsa: bolsa ? `R$ ${bolsa}` : 'A combinar',
            id_empresa: Number(empresaId),
            localizacao,
            tipo,
            modalidade
          };
        }
        return v;
      });
      setVagas(vagasAtualizadas);
      alert('Vaga atualizada com sucesso!');
    }
    navigate('/vagas');
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    marginTop: '6px',
    marginBottom: '16px',
    fontSize: '14px',
    fontFamily: 'inherit'
  };

  const labelStyle = {
    fontWeight: '600',
    fontSize: '13px',
    color: 'var(--text-dark)'
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ marginBottom: '8px' }}>{isNew ? 'Publicar vaga 📢' : 'Editar vaga 📝'}</h1>
        <p style={{ color: 'var(--text-muted)' }}>{isNew ? 'Preencha os detalhes e encontre o candidato ideal ✨' : 'Atualize os dados da sua oportunidade'}</p>
      </div>

      <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>📋 Informações básicas</h3>
            
            <label style={labelStyle}>Título da vaga *</label>
            <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required style={inputStyle} placeholder="Ex: Estagiário de Desenvolvimento" />
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Empresa *</label>
                <select value={empresaId} onChange={e => setEmpresaId(e.target.value)} required style={inputStyle}>
                  <option value="">Selecione...</option>
                  {empresas.map(emp => <option key={emp.id} value={emp.id}>{emp.nome}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Localização</label>
                <input type="text" value={localizacao} onChange={e => setLocalizacao(e.target.value)} style={inputStyle} placeholder="Ex: São Paulo, SP" />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Tipo</label>
                <select value={tipo} onChange={e => setTipo(e.target.value)} style={inputStyle}>
                  <option value="Estágio">Estágio</option>
                  <option value="CLT">CLT</option>
                  <option value="PJ">PJ</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Modalidade</label>
                <select value={modalidade} onChange={e => setModalidade(e.target.value)} style={inputStyle}>
                  <option value="Presencial">Presencial</option>
                  <option value="Híbrido">Híbrido</option>
                  <option value="Remoto">Remoto</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>💰 Bolsa auxílio</h3>
            <label style={labelStyle}>Valor (R$)</label>
            <input type="number" value={bolsa} onChange={e => setBolsa(e.target.value)} style={inputStyle} placeholder="Ex: 1500" />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>📝 Detalhes da vaga</h3>
            <label style={labelStyle}>Descrição *</label>
            <textarea value={descricao} onChange={e => setDescricao(e.target.value)} required style={{...inputStyle, minHeight: '120px', resize: 'vertical'}} placeholder="Descreva as responsabilidades e o dia a dia do estágio..."></textarea>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '30px' }}>
            <button type="submit" className="btn-primary" style={{ flex: 1, padding: '16px', fontSize: '16px' }}>
              {isNew ? 'Publicar Vaga 🚀' : 'Salvar Alterações 💾'}
            </button>
            <button type="button" className="btn-secondary" onClick={() => navigate('/vagas')} style={{ padding: '16px', fontSize: '16px' }}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditarVaga;
