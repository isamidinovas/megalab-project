import "./style.css";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header-homepage/index";
import { News } from "../../components/newsItem";
import { getNewsThunk } from "../../store/News/news.slice";
import { getTagList } from "../../store/Post/tag.slice";
import { Checkbox } from "./components/checkbox";
import { getPostList } from "../../store/News/newsSearch.slice";

export const HomePage = () => {
  const { newsList } = useSelector((state) => state.news);
  const userToken = useSelector((state) => state.profile.userToken);
  const { tagList } = useSelector((state) => state.tags);
  const likedPost = useSelector((state) => state.postLike.likedPosts);
  // const { postList } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  // const [search, setSearch] = useState({
  //   search: "",
  //   tag: "",
  // });
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };
  const handleTegFilter = (value) => {
    setTag(value);
    console.log();
  };
  useEffect(() => {
    dispatch(getNewsThunk({ search, tag }));
  }, [search, tag]);
  useEffect(() => {
    dispatch(getTagList());
  }, [dispatch]);

  return (
    <div className="home">
      <Header getSearchText={handleSearch} />
      <div className="container container__favorite">
        <div className="content__inner">
          <div className="content__filter">
            <p className="filter__text">Фильтрация</p>
            {tagList.length > 0 && (
              <div className="checkboxs">
                {tagList.map((tag, index) => (
                  <Checkbox
                    setSearch={setSearch}
                    getTegFilter={handleTegFilter}
                    key={index}
                    tag={tag}
                  />
                ))}
              </div>
            )}
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
    </div>
  );
};
