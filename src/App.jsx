import { useState } from "react";

import Calculator from "./Components/Calculator/Calculator";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ResulrTable from "./Components/ResultTable/ResulrTable";

import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [investmentState, setInvestmentState] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setInvestmentState((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: newValue,
      };
    });
  }

  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentState;

  const results = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });
  return (
    <div className="main">
      <div>
        <Header />

        <Calculator investmentState={investmentState} onChange={handleChange} />
        {/* Derive state to this compotent */}
        <ResulrTable results={investmentState} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
