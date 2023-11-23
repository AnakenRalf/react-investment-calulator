import InputField from "../InputField/InputField";

export default function Calculator({ investmentState, onChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentState;

  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          labelName="Initial Investment"
          idName="initialInvestment"
          initialValue={initialInvestment}
          value={initialInvestment}
          onChange={onChange}
        />
        <InputField
          labelName="Annual Investment"
          idName="annualInvestment"
          initialValue={annualInvestment}
          value={annualInvestment}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <InputField
          labelName="Expected Returns"
          idName="expectedReturn"
          initialValue={expectedReturn}
          value={expectedReturn}
          onChange={onChange}
        />
        <InputField
          labelName="Duration"
          idName="duration"
          initialValue={duration}
          value={duration}
          onChange={onChange}
        />
      </div>
    </section>
  );
}
