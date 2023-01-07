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
  // const [search, setSearch] = useState({
  //   search: "",
  //   tag: "",
  //   author: "",
  // });
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsThunk(search));
  }, [search]);
  useEffect(() => {
    dispatch(getTegList());
  }, []);
  return (
    <>
      <Header getSearchText={handleSearch} />
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
            // newsList?.filter((item) => {
            //   return search?.search === "" &&
            //     search?.tag === "" &&
            //     search?.author === ""
            //     ? item
            //     : item.search
            //         ?.toLowerCase()
            //         .includes(search?.search.toLowerCase()) &&
            //         item.tag
            //           ?.toLowerCase()
            //           .includes(search?.tag.toLowerCase()) &&
            //         item.author
            //           ?.toLowerCase()
            //           .includes(search?.author.toLowerCase());
            // }
            // )
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
