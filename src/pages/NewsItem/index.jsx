import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header-homepage/index";
import arrowLeftIcon from "../../assets/img/arrow-left-icon.png";
import ShareIcon from "../../assets/img/share.png";
import Rectangle from "../../assets/img/Rectangle.png";
import LikeIcon from "../../assets/img/like-icon.png";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ShareModal } from "../../components/shareModal";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../../store/News/news.slice";
export const NewsItem = () => {
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const { newsList } = useSelector((state) => state.news);
  console.log("news", newsList);
  const newsId = useParams();
  console.log("id", newsId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostDetail());
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <div className="container container__favorite">
          <div className="news__block">
            <Link to={"/"} className="profil__link">
              <img className="back__btn" src={arrowLeftIcon} alt="" />
            </Link>

            <div className="to__favorites">
              <p>29.11.2022</p>
              <div className="like__icon">
                <img src={LikeIcon} alt="" />
              </div>
            </div>

            <div className="news__content">
              <h2 className="news__title">{newsList.title}</h2>
              <p className="news__description">{newsList.short_desc}</p>
              <div className="news__img">
                <img className="news__image" src={Rectangle} alt="" />
              </div>
              <p className="text__info">{newsList.text}</p>
              <button className="share__btn ">
                <img
                  className="share__icon"
                  src={ShareIcon}
                  alt=""
                  onClick={() => {
                    setShowShare(!showShare);
                  }}
                />
              </button>
              {showShare && <ShareModal setShowShare={setShowShare} />}
              <div className="comment__block">
                <p className="comment">Комментарии</p>
                <input
                  placeholder="Напишите комментарий"
                  name="last_name"
                  type="text"
                  required
                  className="comment__input"
                />
                <button className="registration__button" type="submit">
                  Ответить
                </button>
                {/* <p className="user__nick">{newsList.author}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  className aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </p> */}
                {/* <div className="reply">
                  <p>30.11.2022</p>
                  <button
                    className="reply__btn"
                    onClick={() => {
                      setShowComment(!showComment);
                    }}
                  >
                    Ответить
                  </button>
                </div> */}
              </div>

              {/* {showComment && (
                <div className="answer">
                  <p>Вы</p>
                  <input className="comment__input" type="text" name="" id="" />
                  <div className="registration__btn">
                    <button className="registration__button">Ответить</button>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
