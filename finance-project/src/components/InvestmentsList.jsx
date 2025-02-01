import { calculateInvestmentResults, formatter } from '../util/investment';

export default function InvestmentsList({ list }) {
  const resultsData = calculateInvestmentResults(list);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].Annual;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>intrest (Year)</th>
          <th>Total Intrest </th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((row) => {
          const totalIntrest = row.valueEndOfYear - row.Annual * row.year - initialInvestment;
          const totalAmountInvested = row.valueEndOfYear - totalIntrest;
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
