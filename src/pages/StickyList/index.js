import React, { useEffect, useState } from 'react';

import './index.css';

import api from '../../services/api';

import ok from '../../assets/dislike.svg';

export default function Main({ history }) {
  const [ stickys, setStickys ] = useState([]);

  useEffect(() => {
    async function loadStickys() {
      const response = await api.get('/stickys');

      setStickys( response.data );
    }

    loadStickys();
  }, []);

  async function handleNew() {
    history.push('/new');
  }

  async function handleOk( id ){
    await api.delete(`/stickys/${ id }`);

    setStickys( stickys.filter( sticky => sticky._id !== id ));
  }

  return (
    <div className="main-container" >
      <button type="button"
        onClick={ () => handleNew() }
      >
        Criar
      </button>
      { stickys.length > 0 ? (
        <ul>
        { stickys.map( sticky => (
          <li key={ sticky._id }>
            <footer>
                <strong>{ sticky.title }</strong>
  
                <p>{ sticky.message }</p>
              </footer>
  
              <button type="button" onClick={ () => handleOk( sticky._id )}>
                <img src={ ok } alt="OK" />
              </button>
            </li>
          )) }
        </ul>
      ) : (
          <div className="empty">Acabou! :)</div>
      )}
    </div>
  );
};