import "./style.css";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header-homepage/index";
import { News } from "../../components/newsItem";
import { getNewsThunk } from "../../store/News/news.slice";

import { useNavigate, useParams } from "react-router-dom";
import { getPostDetail } from "../../store/News/news.slice";
export const HomePage = () => {
  const { newsList } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);
  return (
    <>
      <Header />
      <div className="container container__favorite">
        <div className="content__inner">
          <div className="content__filter">
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
                <News key={item.id} item={item}  />
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
