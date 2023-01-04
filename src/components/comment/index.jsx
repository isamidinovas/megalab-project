import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import {
  getPostDetail,
  replyComment,
} from "../../store/News/newsDetails.slice";
import { useParams } from "react-router-dom";
import { CommentAnswer } from "../commentAnswer";
export const Comment = ({ item }) => {
  const [showComment, setShowComment] = useState(false);
  const { newsDetail } = useSelector((state) => state.newsDetail);
  const { id: postId } = useParams();
  const dispatch = useDispatch();
  const [commentReply, setCommentReply] = useState("");

  const onChange = (e) => {
    setCommentReply(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newCommentAnswer = {
      post: postId,
      text: commentReply,
      parent: item.id,
    };
    dispatch(replyComment(newCommentAnswer));
    dispatch(getPostDetail(postId));
    setCommentReply("");
    setShowComment(!showComment);
  };

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
        <div className="comment__form">
          <p style={{ marginRight: "7px" }}>Вы</p>
          <input
            className="comment__input"
            type="text"
            value={commentReply}
            onChange={(e) => onChange(e)}
          />
          <div className="registration__btn">
            <button className="registration__button" onClick={handleClick}>
              Ответить
            </button>
          </div>
        </div>
      )}

      {newsDetail.comment ? (
        <div className="comment__item">
          {item.child.map((item) => (
            <CommentAnswer key={item.id} item={item} />
          ))}
        </div>
      ) : null}
    </>
  );
};
