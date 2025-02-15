import { useState } from 'react';

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

  function handleSubmit(event) {
    event.preventDefault();
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleinputBlur('email')}
            onChange={(event) => handleInputValues('email', event.target.value)}
            value={inputState.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please give a valid email address</p>}
          </div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputValues('password', event.target.value)
            }
            value={inputState.password}
          />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
