import React, { useEffect, useState } from "react";
import "./style.css";
import { getPostLike, likePost } from "../../store/Post/postLike.slice";
import { unLikePost } from "../../store/Post/postLike.slice";
import LikeIcon from "../../assets/img/like-icon.png";
import ShareIcon from "../../assets/img/share.png";
import { Link, NavLink } from "react-router-dom";
import { ShareModal } from "../shareModal";
import { useDispatch, useSelector } from "react-redux";
import { getNewsThunk } from "../../store/News/news.slice";
import redLikeIcon from "../../assets/img/redLike-icon.png";
export const News = ({ item }) => {
  const [showShare, setShowShare] = useState(false);
  const { newsDetail } = useSelector((state) => state.newsDetail);
  const likedPost = useSelector((state) => state.postLike.likedPosts);
  const img = `https://megalab.pythonanywhere.com${item.image}`;
  let url = `https://megalab.pythonanywhere.com/post/${item.id}`;
  const dispatch = useDispatch();

  const likePostClick = (e) => {
    e.stopPropagation();
    const postID = {
      post: item.id,
    };
    dispatch(likePost(postID));
    dispatch(getPostLike());
    dispatch(getNewsThunk());
  };
  useEffect(() => {
    getNewsThunk();
  }, [dispatch, likedPost.length, item.is_liked]);
  return (
    <div className="post__item">
      <div className="post__inner">
        <div className="post__block">
          <img className="post__img" src={img} alt="img" />
        </div>
        <div className="post__info">
          <div className="info__block">
            <p>29.11.2022</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <Link to={`/${item.id}`}>
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
            <img
              onClick={likePostClick}
              src={item.is_liked ? redLikeIcon : LikeIcon}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
