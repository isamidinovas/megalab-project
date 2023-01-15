import React, { useState } from "react";
import "./style.css";

export const Checkbox = ({ tag, getTagFilter, setSearch }) => {
  const [checkboxType, setCheckboxType] = useState(false);
  const [tagFilter, setTagFilter] = useState({
    tags: tag.name,
    search: "",
  });
  const onSelectTag = (e) => {
    setCheckboxType(!checkboxType);
    getTagFilter(tagFilter.tags);
  };

  return (
    <label className="checkboxWrap">
      {tag.name}
      <input type="checkbox" checked={checkboxType} onChange={onSelectTag} />
      <span className="checkmark"></span>
    </label>
  );
};
