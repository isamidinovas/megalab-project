import React, { useState } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";
import { SecondHeader } from "../../components/header/SecondHeader";
import { useSelector } from "react-redux";
import { News } from "../../components/newsItem/NewsItem";

export const FavoriteNews = () => {
  const news = useSelector((state) => state.news);

  return (
    <div className="favorite__block">
      <SecondHeader />
      <main className="main">
        <div className="container container__favorite">
          <h2 className="title__favorite-new">Избранные новости</h2>
          <div className="content">
            <div className="news__block">
              {/* {news.map((item) => (
                <>
                  <News key={item.title} item={item} />
                </>
              ))} */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
