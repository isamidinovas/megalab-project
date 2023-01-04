import React, { useState } from "react";
import "./style.css";
export const CommentAnswer = ({ item }) => {
  return (
    <div className="comment__inswer">
      <p className="user__nick">{item.user.name}</p>
      <p>{item.text}</p>
      <div className="reply">
        <p>30.11.2022</p>
        <button className="reply__btn">Ответить</button>
      </div>
    </div>
  );
};
