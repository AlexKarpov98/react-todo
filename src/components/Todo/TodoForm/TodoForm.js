
import React, { useState } from "react";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

export default ({ onSubmit }) => {
  const { resetValue, ...data } = useInputValue("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if ( data.value.length > 1 ) {
      onSubmit(data.value);
      resetValue();
    }

  }

  return (
    <>
      <form onSubmit={e => onFormSubmit(e)}>
        <input {...data} />

        <button type="submit" disabled={data.value.length <= 1}>
          Add
        </button>
      </form>

    </>
  );
};