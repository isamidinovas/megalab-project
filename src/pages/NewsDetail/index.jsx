import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/footer/index";
import Header from "../../components/header-homepage/index";
import { Comment } from "../../components/comment";
import arrowLeftIcon from "../../assets/img/arrow-left-icon.png";
import ShareIcon from "../../assets/img/share.png";
import redLikeIcon from "../../assets/img/redLike-icon.png";
import LikeIcon from "../../assets/img/like-icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { ShareModal } from "../../components/shareModal";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../../store/News/newsDetails.slice";
import { createComment } from "../../store/News/newsDetails.slice";
import { getPostLike, likePost } from "../../store/Post/postLike.slice";
import { unLikePost } from "../../store/Post/postLike.slice";

export const NewsDetail = () => {
  const [showShare, setShowShare] = useState(false);
  const { newsDetail } = useSelector((state) => state.newsDetail);
  const { id: postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState("");
  const img = `https://megalab.pythonanywhere.com/${newsDetail.image}`;
  const likedPost = useSelector((state) => state.postLike.likedPosts);

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
  const likePostClick = (e) => {
    e.stopPropagation();
    const postID = {
      post: postId,
    };
    dispatch(likePost(postID));
    dispatch(getPostLike());
  };
  useEffect(() => {
    dispatch(getPostDetail(postId));
  }, [dispatch, likedPost.length, postId.is_liked]);

  let url = `https://megalab.pythonanywhere.com/post/${postId}`;
  return (
    <div className="wrapper">
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
                <img
                  onClick={likePostClick}
                  src={newsDetail.is_liked ? redLikeIcon : LikeIcon}
                  alt="img"
                />
              </div>
            </div>

            <div className="new__content">
              <h2 className="new__title">{newsDetail.title}</h2>
              <p className="new__description">{newsDetail.short_desc}</p>
              <div className="new__img">
                <img className="new__image" src={img} alt="" />
              </div>
              <p className="text__info">{newsDetail.text}</p>
              <button className="share__btn">
                <img
                  className="share__icon"
                  src={ShareIcon}
                  alt=""
                  onClick={() => {
                    setShowShare(!showShare);
                  }}
                />
              </button>
              {showShare && (
                <ShareModal url={url} setShowShare={setShowShare} />
              )}

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
    </div>
  );
};
