import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { getPostLike, likePost } from "../../store/Post/postLike.slice";
import { unLikePost } from "../../store/Post/postLike.slice";
import LikeIcon from "../../assets/img/like-icon.png";
import ShareIcon from "../../assets/img/share.png";
import { NavLink } from "react-router-dom";
import { ShareModal } from "../shareModal";
import { useDispatch, useSelector } from "react-redux";
import { getNewsThunk } from "../../store/News/news.slice";
export const News = ({ item }) => {
  const [showShare, setShowShare] = useState(false);
  const { newsDetail } = useSelector((state) => state.newsDetail);
  const likedPost = useSelector((state) => state.postLike.likedPosts);
  const img = `https://megalab.pythonanywhere.com${item.image}`;
  const dispatch = useDispatch();

  const likePostClick = (e) => {
    e.stopPropagation();
    const postID = {
      post: item.id,
    };
    if (newsDetail.is_liked === false) {
      dispatch(likePost(postID));
      dispatch(getNewsThunk());
      dispatch(getPostLike());
    } else {
      dispatch(unLikePost(postID));
      dispatch(getNewsThunk());
      dispatch(getPostLike());
    }
  };
  useEffect(() => {
    getNewsThunk();
  }, [dispatch, likedPost.length, item.is_liked]);
  return (
    <div className="post__item">
      <div className="post__inner">
        <div className="post__img">
          <img className="post__img" src={img} alt="img" />
        </div>
        <div className="post__info">
          <div className="to__favorites">
            <p>29.11.2022</p>
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

      <div className="like__icon">
        <img
          onClick={likePostClick}
          src={LikeIcon}
          alt=""
          className={`favorite ${item.is_liked ? "active" : "hidden"} `}
        />
      </div>
    </div>
  );
};
