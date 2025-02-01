import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsedit] = useState(false);
  function handleEdit() {
    setIsedit((editting) => !editting);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      />
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>{!isEditing ? 'Edit' : 'Save'}</button>
      </span>
    </li>
  );
}
