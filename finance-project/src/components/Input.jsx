export default function Input({ label, value, handleChange }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        required
        value={value}
        onChange={handleChange}
        min="0"
      />
    </p>
  );
}
