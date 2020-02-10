import React, { useState } from 'react';
import '../StickyForm/index.css';

import api from '../../services/api';

export default function StickyForm({ history }) {
  const [ title, setTitle ] = useState('');
  const [ message, setMessage ] = useState('');

  async function handleSubmit( e ) {
    e.preventDefault();

    await api.post('/stickys', {
      title,
      message,
    });

    history.push('/');
  }

  async function handleBack() {
    history.push('/');
  }

  return (
    <div className="sticky-form-container">
      <form onSubmit={ handleSubmit }>        
        <input
          placeholder="Titulo do lembrete"
          value={ title }
          onChange={ e => setTitle( e.target.value )}
        />

        <input
          placeholder="Mensagem"
          value={ message }
          onChange={ e => setMessage( e.target.value )}
        />

        <button type="submit">Salvar</button>

        <button type="button"
          onClick={ () => handleBack() }
        >Voltar</button>
      </form>
    </div>
  );
};