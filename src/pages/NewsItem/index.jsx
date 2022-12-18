import React, { useState } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header-homepage/Header";
import arrowLeftIcon from "../../assets/img/arrow-left-icon.png";
import ShareIcon from "../../assets/img/share.png";
import Rectangle from "../../assets/img/Rectangle.png";
import LikeIcon from "../../assets/img/like-icon.png";
import { Link } from "react-router-dom";
import { ShareModal } from "../../components/shareModal/shareModal";

export const NewsItem = () => {
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);

  return (
    <>
      <Header />
      <main className="main">
        <div className="container container__favorite">
          <div className="news__block">
            <Link to="/">
              <img className="back__btn" src={arrowLeftIcon} alt="" />
            </Link>

            <div className="to__favorites">
              <p>29.11.2022</p>
              <div className="like__icon">
                <img src={LikeIcon} alt="" />
              </div>
            </div>

            <div className="news__content">
              <h2 className="news__title">Заголовок новости</h2>
              <p className="text__info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                className aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="news__img">
                <img className="news__image" src={Rectangle} alt="" />
              </div>
              <p className="text__info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. className aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Praesent auctor purus luctus enim egestas, ac scelerisque ante
                pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
                tempor urna. Curabitur vel bibendum lorem. Morbi convallis
                convallis diam sit amet lacinia. Aliquam in elementum tellus.
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
                felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
                Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
                nibh. Mauris sit amet magna non ligula vestibulum eleifend.
                Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
                posuere leo. Nam pulvinar blandit velit, id condimentum diam
                faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec,
                fermentum congue felis. Quisque mauris dolor, fringilla sed
                tincidunt ac, finibus non odio. Sed vitae mauris nec ante
                pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus
                aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet,
                nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl.
                Aenean gravida turpis nisi, consequat dictum risus dapibus a.
                Duis felis ante, varius in neque eu, tempor suscipit sem.
                Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar
                purus vitae justo pharetra consequat. Mauris id mi ut arcu
                feugiat maximus. Mauris consequat tellus id tempus aliquet.
              </p>
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
                <p className="user__nick">Олег Петров</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  className aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
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
                </div>
              </div>

              {showComment && (
                <div className="answer">
                  <p>Вы</p>
                  <input className="comment__input" type="text" name="" id="" />
                  <div className="registration__btn">
                    <button className="registration__button">Ответить</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
