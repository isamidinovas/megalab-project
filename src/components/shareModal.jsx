import React, { useEffect, useRef } from "react";
import "./shareModal.css";
import CloseIcon from "../assets/img/close-icon.png";
import FacebookIcon from "../assets/img/facebook-icon.png";
import Telegram from "../assets/img/telegram-icon.png";
import TwitterIcon from "../assets/img/twitter-icon.png";
import WhatSappIcon from "../assets/img/whatsapp-icon.png";
import { useOnClickOutside } from "../hooks/useOutsideCliks";
export const ShareModal = ({ setShowShare }) => {
  const modalRef = useRef(null);

  const onClickOutside = () => {
    setShowShare(false);
  };
  useOnClickOutside(modalRef, onClickOutside);
  return (
    <div className="share__block share__block-newpage" ref={modalRef}>
      <div className="share__header">
        <p>Поделиться</p>
        <button className="closeBtn" onClick={() => setShowShare(false)}>
          <img src={CloseIcon} alt="" />
        </button>
      </div>
      <div className="social_networks">
        <div className="social_network">
          <a href="https://xn--80affa3aj0al.xn--80asehdb/">
            <img src={Telegram} alt="" />
          </a>
        </div>
        <div className="social_network">
          <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            {" "}
            <img src={TwitterIcon} alt="" />
          </a>
        </div>
        <div className="social_network">
          <a href="https://ru-ru.facebook.com/">
            {" "}
            <img src={FacebookIcon} alt="" />
          </a>
        </div>
        <div className="social_network">
          <a href="https://web.whatsapp.com/">
            <img src={WhatSappIcon} alt="" />
          </a>
        </div>
      </div>
      <div className="link__block">
        <p>Короткая ссылка</p>
        <input className="copy__input" type="text" placeholder="Текст ссылки" />
      </div>
    </div>
  );
};
