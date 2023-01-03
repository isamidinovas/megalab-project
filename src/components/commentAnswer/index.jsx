import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { replyComment } from "../../store/News/newsDetails.slice";

export const CommentAnswer = ({ comment }) => {
  const { newsDetail } = useSelector((state) => state.newsDetail);
  const { id: postId } = useParams();
  const { comment: postIds } = useParams();
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState(false);
  const [commentData, setCommentData] = useState("");
    const onChange = (e) => {
      setCommentData(e.target.value);
    };
  //   console.log("ss", comment);

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     const newComment = {
  //       post: postId,
  //       text: commentData,
  //       parent: comment.id,
  //     };
  //     dispatch(replyComment(newComment));
  //     setCommentData("");
  //     setShowComment(!showComment);
  //   };

  return (
    <>
      <div className="answer__info">
        <p className="user__nick">{comment.user.name}</p>
        <p>{comment.text}</p>
        <p>30.11.2022</p>
      </div>
      <div className="answer__form">
        <p style={{ marginRight: "7px" }}>Вы</p>
        <input
          className="comment__input"
          type="text"
          name=""
          id=""
          value={commentData}
          onChange={(e) => onChange(e)}
        />
        <div className="registration__btn">
          <button className="registration__button">Ответить</button>
        </div>
      </div>
    </>
  );
};
