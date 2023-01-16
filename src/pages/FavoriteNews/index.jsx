import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";
import { SecondHeader } from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import { News } from "../../components/newsItem";
import { getPostLike } from "../../store/Post/postLike.slice";
import Spinner from "../../assets/img/spinner.svg";

export const FavoriteNews = () => {
  const { likedPosts, loading } = useSelector((state) => state.postLike);
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostLike());
  }, [dispatch, likedPosts.length]);

  const filterLikedPosts = likedPosts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <SecondHeader getSearchText={handleSearch} />
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
                {filterLikedPosts.map((item, index) => (
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
      </div>
      <Footer />
    </>
  );
};
