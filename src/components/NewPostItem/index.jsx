import React, { useEffect, useState } from "react";
import "./style.css";
import deleteIcon from "../../assets/img/delete-icon.png";
import ShareIcon from "../../assets/img/share.png";
import { Link } from "react-router-dom";
import { ShareModal } from "../shareModal";
import { getMyPosts, postDelete } from "../../store/Post/post.slice";
import { useDispatch, useSelector } from "react-redux";

export const NewPost = ({ post }) => {
  const dispatch = useDispatch();
  const img = `https://megalab.pythonanywhere.com/${post.image}`;
  let url = `https://megalab.pythonanywhere.com/post/${post.id}`;
  const { userInfo } = useSelector((state) => state.profile);
  const [showShare, setShowShare] = useState(false);

  const handleClick = () => {
    dispatch(postDelete(post.id));
    dispatch(getMyPosts(userInfo.nickname));
  };

  return (
    <div className="post__item">
      <div className="post__inner">
        <div className="post__image">
          <img className="post__img" src={img} alt="img" />
        </div>
        <div className="post__info">
          <div className="info__block">
            <p>29.11.2022</p>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <Link to={`/${post.id}`}>
              Читать дальше<span>&gt;&gt;</span>
            </Link>
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
            {showShare && <ShareModal url={url} setShowShare={setShowShare} />}
          </div>

          <div className="like__icon">
            <img onClick={handleClick} src={deleteIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
