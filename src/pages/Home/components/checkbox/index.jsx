import React from "react";
import "./style.css";
export const Checkbox = ({ tag }) => {
  return (
    <label className="checkboxWrap">
      {tag.name}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};
