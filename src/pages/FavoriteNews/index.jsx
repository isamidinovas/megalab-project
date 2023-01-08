import React, { useEffect } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";
import { SecondHeader } from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import { News } from "../../components/newsItem";
import { getPostLike } from "../../store/Post/postLike.slice";

export const FavoriteNews = () => {
  const news = useSelector((state) => state.news);
  const { likedPosts } = useSelector((state) => state.postLike);
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
          {likedPosts.length > 0 ? (
            <div className="news__block">
              {likedPosts.map((item, index) => (
                <News key={index} item={item} />
              ))}
            </div>
          ) : (
            <h2 style={{ margin: "30px auto" }}>Идет загрузка...</h2>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
