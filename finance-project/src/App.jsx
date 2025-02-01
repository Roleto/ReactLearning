import { useState } from 'react';
import InvestmentsInputs from './components/InvestmentsInputs';
import InvestmentsList from './components/InvestmentsList';
const INVESTMENTS_INPUTS = {
  initial: 10000,
  annual: 1200,
  expected: 6,
  duration: 10,
};
function App() {
  const [state, setState] = useState({
    inputs: INVESTMENTS_INPUTS,
  });
  const inputIsValid = state.inputs.lenght > 0;
  function handleChange(key, input) {
    setState((prevState) => {
      prevState = {
        inputs: { ...prevState.inputs, [key]: +input },
      };
      return prevState;
    });
  }
  return (
    <div>
      <InvestmentsInputs
        inputs={state.inputs}
        onChange={handleChange}
      />
      {!inputIsValid && <p className="center"> Please enter a duration greater than zero.</p>}
      {inputIsValid && <InvestmentsList list={state.inputs} />}
    </div>
  );
}

export default App;
