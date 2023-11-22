import { formatter } from "../../util/investment";

export default function ResulrTable({ results }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.totalInterest)}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
          </tr>
        ))}
        {/* <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Data</td>
          <td>Data</td>
          <td>Data</td>
        </tr> */}
      </tbody>
    </table>
  );
}

// Year	Investment Value	Interest(Year)	Total Interest	Invested Capital
// 1	$16,725	$825	$825	$15900
// 2	$18,545	$920	$1,745	$16800
// 3	$20,465	$1,020	$2,765	$17700
// 4	$22,385	$1,115	$3,880	$18600
// 5	$24,305	$1,210	$5,090	$19500
