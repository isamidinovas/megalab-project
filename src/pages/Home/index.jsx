import "./style.css";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header-homepage/index";
import { News } from "../../components/newsItem";
import { getNewsThunk } from "../../store/News/news.slice";
import { likePost } from "../../store/News/news.slice";
import { useNavigate } from "react-router-dom";
import { getPostDetail } from "../../store/News/news.slice";
export const HomePage = () => {
  const navigate = useNavigate();
  const { newsList } = useSelector((state) => state.news);
  console.log("home", newsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  // const handleClick = useCallback(() => {
  //   navigate("/:id");
  // }, [navigate]);

  return (
    <>
      <Header />
      <div className="container container__favorite">
        <div className="content">
          <div className="filter__block">
            <p className="filter__text">Фильтрация</p>
            <div className="checkboxs">
              <label className="checkboxWrap">
                Sport
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <label className="checkboxWrap">
                Политика
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <label className="checkboxWrap">
                Звезды
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <label className="checkboxWrap">
                <span className="checkbox__text">Искусство</span>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <label className="checkboxWrap">
                Мода
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="registration_btn">
              <button className="registration__button">Применить</button>
            </div>
          </div>
          {newsList.length > 0 ? (
            <div className="news__content">
              {newsList.map((item) => (
                <News key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <h2 className="loaded">Идет загрузка...</h2>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
