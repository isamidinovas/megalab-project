import React, { useEffect, useRef, useState } from "react";
// import "./NewsItem.css";
import cn from "classnames";
import styles from "./NewsItem.css";
import LikeIcon from "../../assets/img/like-icon.png";
import Rectangle from "../../assets/img/Rectangle.png";
import ShareIcon from "../../assets/img/share.png";
import { Link } from "react-router-dom";
import { ShareModal } from "../../components/shareModal/shareModal";
import { useSelector } from "react-redux";
import classNames from "classnames";

export const News = ({ item }) => {
  const [is_liked, setIs_Liked] = useState(false);
  const btnClass = classNames({
    btn: true,
    "btn--secondary": is_liked,
  });
  console.log("isl", is_liked);
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
              onClick={() => {
                setIs_Liked(true);
              }}
              className={btnClass}
              src={LikeIcon}
              alt=""
            />
          </button>
        </div>
        <h2>{item.title}</h2>
        <p>{item.text}</p>

        <Link to="/new">Читать дальше</Link>
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
