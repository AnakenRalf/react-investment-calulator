import React from "react";

export default function InputField({ labelName, idName, initialValue = 1500 }) {
  return (
    <p>
      <label htmlFor={idName}>{labelName}</label>
      <input id={idName} type="number" placeholder={initialValue} required />
    </p>
  );
}
