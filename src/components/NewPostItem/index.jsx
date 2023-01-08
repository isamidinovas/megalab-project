import React, { useState } from "react";
import "./style.css";
import deleteIcon from "../../assets/img/delete-icon.png";
import ShareIcon from "../../assets/img/share.png";
import { Link } from "react-router-dom";
import { ShareModal } from "../shareModal";
import { postDelete } from "../../store/Post/post.slice";
import { useDispatch } from "react-redux";
import { getNewsThunk } from "../../store/News/news.slice";

export const NewPost = ({ post }) => {
  const handleClick = () => {
    dispatch(postDelete(post.id));
    dispatch(getNewsThunk());
  };

  const dispatch = useDispatch();
  const img = `https://megalab.pythonanywhere.com${post.image}`;
  const [showShare, setShowShare] = useState(false);
  return (
    <div className="post__item">
      <div className="post__inner">
        <div className="post__img">
          <img className="post__img" src={img} alt="" />
        </div>
        <div className="post__info">
          <div className="to__favorites">
            <p>29.11.2022</p>
          </div>
          <h2>{post.title}</h2>
          <p>{post.text}</p>

          <Link to={`/${post.id}`}> Читать дальше</Link>
          <button className="share__btn ">
            <img
              className="share__icon"
              src={ShareIcon}
              alt=""
              onClick={() => {
                setShowShare(!showShare);
              }}
            />
          </button>
          {showShare && <ShareModal setShowShare={setShowShare} />}
        </div>
      </div>

      <div className="like__icon">
        <img onClick={handleClick} src={deleteIcon} alt="" />
      </div>
    </div>
  );
};
