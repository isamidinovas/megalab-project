import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import LikeIcon from "../assets/img/like-icon.png";
import Rectangle from "../assets/img/Rectangle.png";
import ShareIcon from "../assets/img/share.png";
import { Link } from "react-router-dom";
import { ShareModal } from "./shareModal";

export const News = () => {
  const [shareModal, setShareModal] = useState(false);
  return (
    <div className="news__item">
      <div className="news__img">
        <img className="news__img" src={Rectangle} alt="" />
      </div>
      <div className="news__info">
        <div className="to__favorites">
          <p>29.11.2022</p>
          <div className="like__icon">
            <img className="like__icon" src={LikeIcon} alt="" />
          </div>
        </div>
        <h2>Заголовок новости</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>

        <Link to="/new">Читать дальше</Link>
        <div className="share" onClick={() => setShareModal(!shareModal)}>
          <img src={ShareIcon} alt="" />
        </div>
        {shareModal && <ShareModal setShowShare={setShareModal} />}
      </div>
    </div>
  );
};
