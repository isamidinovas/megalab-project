import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";
import { SecondHeader } from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import { News } from "../../components/newsItem";
import { getPostLike } from "../../store/News/news.slice";
export const FavoriteNews = () => {
  const news = useSelector((state) => state.news);
  const { is_liked } = useSelector((state) => state.newsDetail);
  const { newsList } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostLike());
  }, []);

  return (
    <div className="favorite__block">
      <SecondHeader />
      <div className="container container__favorite">
        <h2 className="title__favorite-new">Избранные новости</h2>
        <div className="favorite__content">
          {newsList.length > 0 ? (
            <div className="news__block">
              {newsList.map((item) => (
                <>
                  <News key={item} item={item} />
                </>
              ))}
            </div>
          ) : (
            <h2 style={{ margin: "30px auto" }}>
              Избранных новостей пока нету!
            </h2>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
