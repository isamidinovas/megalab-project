import React, { useEffect, useRef, useState } from "react";
import styles from "./style.css";
import LikeIcon from "../../assets/img/like-icon.png";
import Rectangle from "../../assets/img/Rectangle.png";
import ShareIcon from "../../assets/img/share.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShareModal } from "../shareModal";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { getPostDetail, likePosts } from "../../store/News/news.slice";

export const News = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`${item.id}`);
    dispatch(getPostDetail(item));
  };
  const dispatch = useDispatch();

  const news = useSelector((state) => state.news);
  const [showShare, setShowShare] = useState(false);
  return (
    <div className="news__item">
      <div className="news__img">
        <img className="news__img" src={Rectangle} alt="" />
      </div>
      <div className="news__info">
        <div className="to__favorites">
          <p>27.12.22</p>
          <button className="btn">
            <img
      
              src={LikeIcon}
              alt=""
            />
          </button>
        </div>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <NavLink to={`/${item.id}`} onClick={handleClick}>
          Читать дальше
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
