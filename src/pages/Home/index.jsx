import "./style.css";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header-homepage/index";
import { News } from "../../components/newsItem";
import { getNewsThunk } from "../../store/News/news.slice";
import { getTegList } from "../../store/Post/teg.slice";
import { Checkbox } from "./components/checkbox";

export const HomePage = () => {
  const { newsList } = useSelector((state) => state.news);
  const { tegList } = useSelector((state) => state.tegs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);
  useEffect(() => {
    dispatch(getTegList());
  }, []);
  return (
    <>
      <Header />
      <div className="container container__favorite">
        <div className="content__inner">
          <div className="content__filter">
            <p className="filter__text">Фильтрация</p>
            {tegList.length > 0 ? (
              <div className="checkboxs">
                {tegList.map((teg, index) => (
                  <Checkbox key={index} teg={teg} />
                ))}
              </div>
            ) : null}
            <div className="registration_btn">
              <button className="registration__button">Применить</button>
            </div>
          </div>
          {newsList.length > 0 ? (
            <div className="news__content">
              {newsList.map((item, index) => (
                <News key={index} item={item} />
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
