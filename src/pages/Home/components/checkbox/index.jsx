import React, { useState } from "react";
import "./style.css";
export const Checkbox = ({ tag, getTegFilter, setSearch }) => {
  const [checkboxType, setCheckboxType] = useState(false);
  // const [tagFilter, setTagFilter] = useState("");
  const [author, setTagFilter] = useState({
    tag: "",
  });
  const handleSearch = (e) => {
    setCheckboxType(!checkboxType);
    setTagFilter(e.target.value);
    console.log("ee", e.target.value);
    console.log("check", checkboxType);
    getTegFilter(e.target.value);
  };
  return (
    <label className="checkboxWrap">
      {tag.name}
      <input
        type="checkbox"
        value={author}
        checked={checkboxType}
        onChange={handleSearch}
      />
      <span className="checkmark"></span>
    </label>
  );
};
