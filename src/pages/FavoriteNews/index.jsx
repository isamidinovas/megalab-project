import React, { useState } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";

import LikeIcon from "../../assets/img/like-icon.png";
import Rectangle from "../../assets/img/Rectangle.png";
import ShareIcon from "../../assets/img/share.png";
import { Link } from "react-router-dom";
import { SecondHeader } from "../../components/header/SecondHeader";
import { useSelector } from "react-redux";
import { ShareModal } from "../../components/shareModal";

export const FavoriteNews = () => {
  const [showShare, setShowShare] = useState(false);
  const news = useSelector((state) => state.news);
  return (
    <div className="favorite__block">
      <SecondHeader />
      <main className="main">
        <div className="container container__favorite">
          <h2 className="title__favorite-new">Избранные новости</h2>
          <div className="content">
            <div className="news__block">
              {news.map((item) => (
                <>
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
                      <p>{item.content}</p>

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
                </>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
