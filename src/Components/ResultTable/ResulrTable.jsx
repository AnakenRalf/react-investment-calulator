import { calculateInvestmentResults, formatter } from "../../util/investment";

export default function ResultTable({ dataForCalculator }) {
  const calculation = calculateInvestmentResults(dataForCalculator);
  const initialInvestment =
    calculation[0].valueEndOfYear -
    calculation[0].interest -
    calculation[0].annualInvestment;

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
        {calculation.map((calcRow) => {
          const totalInterest =
            calcRow.valueEndOfYear -
            calcRow.annualInvestment * calcRow.year -
            initialInvestment;
          const totalAmountInvestment = calcRow.valueEndOfYear - totalInterest;
          return (
            <tr key={calcRow.year}>
              <td>{calcRow.year}</td>
              <td>{formatter.format(calcRow.valueEndOfYear)}</td>
              <td>{formatter.format(calcRow.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvestment)}</td>
            </tr>
          );
        })}
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
