export default function SummaryStat({ number, text }) {
  return (
    <p>
      <span className="number">{number}%</span>
      <span className="text">{text}</span>
    </p>
  );
}
