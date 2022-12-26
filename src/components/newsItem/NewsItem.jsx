import React, { useEffect, useRef, useState } from "react";
import "./NewsItem.css";
import LikeIcon from "../../assets/img/like-icon.png";
import Rectangle from "../../assets/img/Rectangle.png";
import ShareIcon from "../../assets/img/share.png";
import { Link } from "react-router-dom";
import { ShareModal } from "../../components/shareModal/shareModal";
import { useSelector } from "react-redux";

export const News = ({ item }) => {
  const news = useSelector((state) => state.news);
  const [showShare, setShowShare] = useState(false);
  return (
    <div className="news__item">
      <div className="news__img">
        <img className="news__img" src={Rectangle} alt="" />
      </div>
      <div className="news__info">
        <div className="to__favorites">
          <p>{item.date}</p>
          <div className="like__icon">
            <img src={LikeIcon} alt="" />
          </div>
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
