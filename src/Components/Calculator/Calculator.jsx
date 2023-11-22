import InputField from "../InputField/InputField";

export default function Calculator({ investmentState, onChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentState;

  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          labelName="Initial Investment"
          idName="initInvestment"
          initialValue={initialInvestment}
          value={initialInvestment}
          onChange={(event) =>
            onChange("initialInvestment", event.target.value)
          }
        />
        <InputField
          labelName="Annual Investment"
          idName="anualInvest"
          initialValue={annualInvestment}
          value={annualInvestment}
          onChange={(event) => onChange("annualInvestment", event.target.value)}
        />
      </div>
      <div className="input-group">
        <InputField
          labelName="Expected Returns"
          idName="expectReturn"
          initialValue={expectedReturn}
          value={expectedReturn}
          onChange={(event) => onChange("expectedReturn", event.target.value)}
        />
        <InputField
          labelName="Duration"
          idName="duration"
          initialValue={duration}
          value={duration}
          onChange={(event) => onChange("duration", event.target.value)}
        />
      </div>
    </section>
  );
}
