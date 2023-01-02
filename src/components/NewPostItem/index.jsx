import React, { useEffect, useState } from "react";
import "./style.css";
import Rectangle from "../../assets/img/Rectangle.png";
import deleteIcon from "../../assets/img/delete-icon.png";
import ShareIcon from "../../assets/img/share.png";
import { Link } from "react-router-dom";
import { ShareModal } from "../shareModal";
import { postCreate, postDelete } from "../../store/Post/post.slice";
import { useDispatch } from "react-redux";

export const NewPost = ({ post }) => {
  const handleClick = () => {
    dispatch(postDelete(post.id));
  };
  

  const dispatch = useDispatch();
  // const img = `https://megalab.pythonanywhere.com${post.image}`;
  const [showShare, setShowShare] = useState(false);
  return (
    <div className="news__item">
      <div className="news__img">
        <img className="news__img" src={Rectangle} alt="" />
      </div>
      <div className="news__info">
        <div className="to__favorites">
          <p>29.11.2022</p>
          <div className="like__icon">
            <img
              // onClick={() => dispatch(postDelete(post.id))}
              onClick={handleClick}
              src={deleteIcon}
              alt=""
            />
          </div>
        </div>
        <h2>{post.title}</h2>
        <p>{post.text}</p>

        <Link to={"/new"}> Читать дальше</Link>
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
