import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../checkbox";
import { getNewsThunk } from "../../../../store/News/news.slice";
import { getTagList } from "../../../../store/Post/tag.slice";

export const FilterModal = ({}) => {
  const { tagList } = useSelector((state) => state.tags);
  const [tag, setTag] = useState([]);
  const [search, setSearch] = useState("");
  const likedPost = useSelector((state) => state.postLike.likedPosts);
  const dispatch = useDispatch();
  const handleTagFilter = (value) => {
    if (tag.includes(value)) {
      const newTags = tag.filter((item) => {
        return item !== value;
      });
      setTag(newTags);
    } else {
      setTag((previousValue) => [...previousValue, value]);
    }
  };

  useEffect(() => {
    const tags = tag.join();
    dispatch(getNewsThunk({ search, tag: tags }));
  }, [search, tag, likedPost.length]);
  useEffect(() => {
    dispatch(getTagList());
  }, [dispatch]);

  return (
    <div className="filter__modal">
      <p className="filter__text">Фильтрация</p>
      {tagList.length > 0 && (
        <div className="checkboxs">
          {tagList.map((tag, index) => (
            <Checkbox
              setSearch={setSearch}
              getTagFilter={handleTagFilter}
              key={index}
              tag={tag}
            />
          ))}
        </div>
      )}
      <div className="registration_btn">
        <button className="registration__button">Применить</button>
      </div>
    </div>
  );
};
