import React from 'react';
import { MdDelete } from 'react-icons/md';

import './styles.css';

function DevItem({ dev, onDeleteClick }) {

  async function handleDelete() {
    await onDeleteClick(dev._id)
  }

  return (
    <li className="dev-item">
    <header>
      <img src={dev.avatar_url} alt={dev.name} />
      <div className="user-info">
        <strong>{dev.name}</strong>
        <span>{dev.techs.join(', ')}</span>
      </div>

      <div className="action-buttons">
        <button className="delete" onClick={handleDelete}>
          <MdDelete size={20} color='#fff' />
        </button>
      </div>
    </header>

    <p>{dev.bio}</p>

    <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
  </li>
  )
}

export default DevItem;
