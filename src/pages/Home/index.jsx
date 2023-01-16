import "./style.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header-homepage/index";
import { News } from "../../components/newsItem";
import { getNewsThunk } from "../../store/News/news.slice";
import { getTagList } from "../../store/Post/tag.slice";
import { Checkbox } from "./components/checkbox";
import Spinner from "../../assets/img/spinner.svg";
import FilterSlider from "../../assets/img/sliders-icon.png";
import { getPostLike } from "../../store/Post/postLike.slice";

export const HomePage = () => {
  const { newsList, loading } = useSelector((state) => state.news);
  const { tagList } = useSelector((state) => state.tags);
  const likedPost = useSelector((state) => state.postLike.likedPosts);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState([]);

  const handleSearch = (value) => {
    setSearch(value);
  };
  const handleTagFilter = (value) => {
    if (tag.includes(value)) {
      const newTags = tag.filter((item) => {
        return item !== value;
      });
      setTag(newTags);
    } else {
      setTag((previousValue) => [...previousValue, value]);
    }
  };

  useEffect(() => {
    const tags = tag.join();
    dispatch(getNewsThunk({ search, tag: tags }));
    dispatch(getPostLike());
  }, [search, tag, likedPost.length]);
  useEffect(() => {
    dispatch(getTagList());
  }, [dispatch]);

  return (
    <div className="d">
      <Header getSearchText={handleSearch} />
      <div className="content__block">
        {" "}
        <div className="filter__slider">
          <img className="slider__img" src={FilterSlider} alt="" />
        </div>
        <div className="container container__favorite">
          <div className="content__inner">
            <div className="content__filter">
              <p className="filter__text">Фильтрация</p>
              {tagList.length > 0 && (
                <div className="checkboxs">
                  {tagList.map((tag, index) => (
                    <Checkbox
                      setSearch={setSearch}
                      getTagFilter={handleTagFilter}
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
            {loading ? (
              <div className="loaded__block">
                <img src={Spinner} alt="" />
              </div>
            ) : newsList.length ? (
              <div className="news__content">
                {newsList.map((item, index) => (
                  <News key={index} item={item} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
