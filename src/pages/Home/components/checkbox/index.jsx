import React from "react";
import "./style.css";
export const Checkbox = ({ teg }) => {
  return (
    <label className="checkboxWrap">
      {teg.name}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};
