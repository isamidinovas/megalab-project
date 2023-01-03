import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { replyComment } from "../../store/News/newsDetails.slice";
import { useParams } from "react-router-dom";
export const Comment = ({ item }) => {
  const [showComment, setShowComment] = useState(false);
  const { newsList } = useSelector((state) => state.news);
  const comment = useSelector((state) => state.news.newsList.comment);

  const { newsDetail } = useSelector((state) => state.newsDetail);
  const { id: postId } = useParams();
  const { comment: postIds } = useParams();
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState("");
  const onChange = (e) => {
    setCommentData(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newComment = {
      post: postId,
      text: commentData,
      parent: item.id,
    };
    dispatch(replyComment(newComment));
    setCommentData("");
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
      <div className="hh">
        {newsDetail.comment ? (
          <div className="comment__item">
            {newsDetail.comment.map((item) => (
              <Comment key={item.id} item={item} />
            ))}
          </div>
        ) : null}
      </div>
      {showComment && (
        <div className="answer">
          <p style={{ marginRight: "7px" }}>Вы</p>
          <input
            className="comment__input"
            type="text"
            value={commentData}
            onChange={(e) => onChange(e)}
          />
          <div className="registration__btn">
            <button className="registration__button" onClick={handleClick}>
              Ответить
            </button>
          </div>
        </div>
      )}
    </>
  );
};
