import React, { useEffect } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";
import { SecondHeader } from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import { News } from "../../components/newsItem";
import { getPostLike } from "../../store/Post/postLike.slice";
import Spinner from "../../assets/img/Spinner.svg";
export const FavoriteNews = () => {
  const { likedPosts, loading } = useSelector((state) => state.postLike);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostLike());
  }, [dispatch, likedPosts.length]);

  return (
    <>
      <SecondHeader />
      <div className="favorite__block">
        <div className="container container__favorite">
          <h2 className="title__favorite-new">Избранные новости</h2>
          <div className="favorite__content">
            {loading ? (
              <div className="loaded__block">
                <img src={Spinner} alt="" />
              </div>
            ) : likedPosts.length ? (
              <div className="news__block">
                {likedPosts.map((item, index) => (
                  <News key={index} item={item} />
                ))}
              </div>
            ) : (
              <h2 style={{ margin: "30px auto" }}>
                Пока избранных новостей нету!
              </h2>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
