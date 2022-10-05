import React from "react";

const MySelect = ({ option, defaultValue = "sort", value, onChange }) => {
  return (
    <div>
      <select
        style={{ padding: "10px" }}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {option.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
