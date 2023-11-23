import { useState } from "react";

import Calculator from "./Components/Calculator/Calculator";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ResulrTable from "./Components/ResultTable/ResulrTable";

function App() {
  const [investmentState, setInvestmentState] = useState({
    initialInvestment: 5000,
    annualInvestment: 400,
    expectedReturn: 6,
    duration: 10,
  });

  const isDataValid = investmentState.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    console.log(inputIdentifier, newValue);
    setInvestmentState((prevState) => ({
      ...prevState,
      [inputIdentifier]: newValue,
    }));
  };

  return (
    <div className="main">
      <div>
        <Header />
        <Calculator investmentState={investmentState} onChange={handleChange} />
        {!isDataValid && (
          <p className="center">
            Please provide correct duration more than 0 years
          </p>
        )}
        {isDataValid && <ResulrTable dataForCalculator={investmentState} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
