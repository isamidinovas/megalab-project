import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header-homepage/index";
import { Comment } from "../../components/comment";
import arrowLeftIcon from "../../assets/img/arrow-left-icon.png";
import ShareIcon from "../../assets/img/share.png";
import Rectangle from "../../assets/img/Rectangle.png";
import LikeIcon from "../../assets/img/like-icon.png";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ShareModal } from "../../components/shareModal";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../../store/News/news.slice";
import { createComment } from "../../store/News/news.slice";
export const NewsItem = () => {
  // const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const { newsList } = useSelector((state) => state.news);
  const id = useSelector((state) => state.news.newsList.id);
  const comment = useSelector((state) => state.news.newsList.comment);
  const myCommentsIds = JSON.parse(localStorage.getItem("myComments"));

  console.log("commentId", myCommentsIds);

  const newsId = useParams();
  console.log("id", newsId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostDetail());
  }, []);
  const [commentData, setCommentData] = useState({
    post: 1217,
    text: "",
  });
  function onChange(e) {
    const { name, value } = e.target;

    setCommentData((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  }
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(createComment(commentData));
  };
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
                <h2 className="comment__text">Комментарии</h2>
                {comment ? (
                  <div className="comment__item">
                    {comment.map((item) => (
                      <Comment key={item.id} item={item} />
                    ))}
                  </div>
                ) : null}
                <input
                  placeholder="Напишите комментарий"
                  name="text"
                  onChange={(e) => onChange(e)}
                  type="text"
                  required
                  className="comment__input"
                />
                <button
                  onClick={handleClick}
                  className="registration__button"
                  type="submit"
                >
                  Ответить
                </button>
                <div className="comments">
                  {/* <p className="user__nick">{newsList.author}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. className aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos.
                  </p>
                  <div className="reply">
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
