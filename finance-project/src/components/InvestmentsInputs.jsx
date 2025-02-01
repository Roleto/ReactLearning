import Input from './Input';
export default function InvestmentsInputs({ inputs, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          value={inputs.initial}
          handleChange={(event) => onChange('initial', event.target.value)}
        />
        <Input
          label="Annual Investment"
          value={inputs.annual}
          handleChange={(event) => onChange('annual', event.target.value)}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          value={inputs.expected}
          handleChange={(event) => onChange('expected', event.target.value)}
        />
        <Input
          label="Duration"
          value={inputs.duration}
          handleChange={(event) => onChange('duration', event.target.value)}
        />
      </div>
    </section>
  );
}
