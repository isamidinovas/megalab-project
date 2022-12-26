import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header-homepage/Header";
import { News } from "../../components/newsItem/NewsItem";
import { newsShow } from "../../store/News/news.slice";

import "./style.css";
export const HomePage = () => {
  const [news, setNews] = useState("");
  const { newsInfo } = useSelector((state) => state.news);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("RE");
  //   dispatch(newsShow());
  // }, [dispatch]);
  // const news = useSelector((state) => state.news);
  // console.log(newsInfo);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://megalab.pythonanywhere.com/post/", {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }

        //  else {
        //   alert("something is wrong" + res.status);
        //   // goAuthpage();
        //   // navigate("/auth")
        // }
      })
      .then((data) => setNews(data));
  }, []);
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

          <div className="news__content">
            {/* {news.map((item) => (
              <News key={item.id} item={item} />
            ))} */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
