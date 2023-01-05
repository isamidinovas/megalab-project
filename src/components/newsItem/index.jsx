import React, { useEffect, useRef, useState } from "react";
import styles from "./style.css";
import { likePost } from "../../store/News/newsDetails.slice";
import LikeIcon from "../../assets/img/like-icon.png";
import Rectangle from "../../assets/img/Rectangle.png";
import ShareIcon from "../../assets/img/share.png";
import { NavLink, useParams } from "react-router-dom";
import { ShareModal } from "../shareModal";
import { useDispatch } from "react-redux";
export const News = ({ item }) => {
  const [showShare, setShowShare] = useState(false);
  const { id: postId } = useParams();
  const dispatch = useDispatch();
  const likePostClick = () => {
    const postID = {
      post: item.id,
    };
    dispatch(likePost(postID));
  };

  return (
    <div className="news__item">
      <div className="news__img">
        <img className="news__img" src={Rectangle} alt="" />
      </div>
      <div className="news__info">
        <div className="to__favorites">
          <p>27.12.22</p>
          <button className="btn">
            <img onClick={likePostClick} src={LikeIcon} alt="" />
          </button>
        </div>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <NavLink to={`/${item.id}`}>
          Читать дальше<span>&gt;&gt;</span>
        </NavLink>
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
  );
};
