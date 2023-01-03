import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
export const Comment = ({ item }) => {
  const [showComment, setShowComment] = useState(false);
  const { newsList } = useSelector((state) => state.news);
  const comment = useSelector((state) => state.news.newsList.comment);

  return (
    <>
      <p className="user__nick">{item.user.name}</p>
      <p>{item.text}</p>
      <div className="reply">
        <p>30.11.2022</p>
        <button
          className="reply__btn"
          onClick={() => {
            setShowComment(!showComment);
          }}
        >
          Ответить
        </button>
      </div>
      {showComment && (
        <div className="answer">
          <p style={{ marginRight: "7px" }}>Вы</p>
          <input className="comment__input" type="text" name="" id="" />
          <div className="registration__btn">
            <button className="registration__button">Ответить</button>
          </div>
        </div>
      )}
    </>
  );
};
