import { useRef } from 'react';
import { useState } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function buttonClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''; // ilyet nem szabad ref csak olvasni használatos. itt kivétel erősyti a
    //  szabáyt mert egy egyszerű kód ez és nem vátoztatunk state variableket
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={buttonClick}>Set Name</button>
      </p>
    </section>
  );
}
