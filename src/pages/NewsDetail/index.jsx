import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header-homepage/index";
import { Comment } from "../../components/comment";
import arrowLeftIcon from "../../assets/img/arrow-left-icon.png";
import ShareIcon from "../../assets/img/share.png";
import Rectangle from "../../assets/img/Rectangle.png";
import LikeIcon from "../../assets/img/like-icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { ShareModal } from "../../components/shareModal";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../../store/News/newsDetails.slice";
import { createComment } from "../../store/News/newsDetails.slice";
import { likePost } from "../../store/Post/postLike.slice";
import { unLikePost } from "../../store/Post/postLike.slice";
export const NewsDetail = () => {
  const [showShare, setShowShare] = useState(false);
  const { newsDetail } = useSelector((state) => state.newsDetail);
  const { id: postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState("");

  useEffect(() => {
    dispatch(getPostDetail(postId));
  }, []);

  const onChange = (e) => {
    setCommentData(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newComment = {
      post: postId,
      text: commentData,
    };
    dispatch(createComment(newComment));
    setCommentData("");
  };

  const likePostClick = () => {
    const postID = {
      post: postId,
    };
    if (newsDetail.is_liked == false) {
      dispatch(likePost(postID));
    } else {
      dispatch(unLikePost(postID));
    }
  };
  return (
    <>
      <Header />
      <main className="main">
        <div className="container container__favorite">
          <div className="news__block">
            <img
              className="back__btn"
              src={arrowLeftIcon}
              alt=""
              onClick={() => navigate(-1)}
            />
            <div className="to__favorites">
              <p>29.11.2022</p>
              <div className="like__icon">
                <img onClick={likePostClick} src={LikeIcon} alt="" />
              </div>
            </div>

            <div className="news__content">
              <h2 className="news__title">{newsDetail.title}</h2>
              <p className="news__description">{newsDetail.short_desc}</p>
              <div className="news__img">
                <img className="news__image" src={Rectangle} alt="" />
              </div>
              <p className="text__info">{newsDetail.text}</p>
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
                {newsDetail.comment ? (
                  <div className="comment__item">
                    {newsDetail.comment.map((item) => (
                      <Comment key={item.id} item={item} />
                    ))}
                  </div>
                ) : null}
                <div className="comment__form">
                  <input
                    placeholder="Напишите комментарий"
                    value={commentData}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
