import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FromInputLabelContainer,
} from "./form-input.styles";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label && (
        <FromInputLabelContainer
          className={`${otherProps.value.length && "shrink"}`}
        >
          {label}
        </FromInputLabelContainer>
      )}
    </GroupContainer>
  );
}

export default FormInput;
