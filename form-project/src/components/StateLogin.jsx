import { useState } from 'react';
import Input from './Input.jsx';

export default function Login() {
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !inputState.email.includes('@');
  const passwordIsInvalid = didEdit.password && !inputState.password.trim() < 6;

  function handleSubmit(event) {
    event.preventDefault();
    // valadiation is a good idea here too, just to be safe
    console.log(inputState);
  }

  function handleInputValues(identifier, value) {
    setInputState((prevstat) => ({
      ...prevstat,
      [identifier]: value,
    }));
    setDidEdit((prevstat) => ({
      ...prevstat,
      [identifier]: false,
    }));
  }
  function handleinputBlur(identifier) {
    setDidEdit((prevstat) => ({
      ...prevstat,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleinputBlur('email')}
          onChange={(event) => handleInputValues('email', event.target.value)}
          value={inputState.email}
          error={emailIsInvalid && 'Please enter a valid email address!'}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleinputBlur('password')}
          onChange={(event) =>
            handleInputValues('password', event.target.value)
          }
          value={inputState.password}
          error={passwordIsInvalid && 'Please enter a valid password!'}
        />
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
