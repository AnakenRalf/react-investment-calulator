import React from "react";

export default function InputField({
  labelName,
  idName,
  initialValue,
  onChange,
  value,
}) {
  return (
    <p>
      <label htmlFor={idName}>{labelName}</label>
      <input
        id={idName}
        type="number"
        value={value}
        placeholder={initialValue}
        onChange={(event) => onChange(idName, Number(event.target.value))}
        required
      />
    </p>
  );
}
