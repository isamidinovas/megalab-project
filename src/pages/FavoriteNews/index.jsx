import React from "react";
import "./style.css";
import Footer from "../../components/Footer";

import LikeIcon from "../../assets/img/like-icon.png";
import Rectangle from "../../assets/img/Rectangle.png";
import ShareIcon from "../../assets/img/share.png";
import { Link } from "react-router-dom";
import { SecondHeader } from "../../components/SecondHeader";
import { useSelector } from "react-redux";

export const FavoriteNews = () => {
  const news = useSelector(state => state.news)
  return (
    <>
     <SecondHeader/>
      <main class="main">
        <div class="containerr">
          <h2 class="title__favorite-new">Избранные новости</h2>
          <div class="content">
            <div class="news__block">
              {
                news.map(item => (
             <>
                  <div className="news__item">
                  <div className="news__img">
                    <img className="news__img" src={Rectangle} alt="" />
                  </div>
                  <div className="news__info">
                    <div className="to__favorites">
                      <p>{item.date}</p>
                      <div className="heart__icon">
                        <img src={LikeIcon} alt="" />
                      </div>
                    </div>
                    <h2>{item.title}</h2>
                    <p>
                     {item.content}
                    </p>
  
                    <Link to="/new">Читать дальше</Link>
                    <div className="share">
                      <img src={ShareIcon} alt="" />
                    </div>
                  </div>
                </div>
             </>
                ))
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
