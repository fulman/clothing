import React from "react";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
}

export default FormInput;
