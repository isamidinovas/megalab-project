import React, { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import arrowLeftIcon from "../../assets/img/arrow-left-icon.png";
import ShareIcon from "../../assets/img/share.png";
import Rectangle from "../../assets/img/Rectangle.png";
import LikeIcon from "../../assets/img/like-icon.png";
import { Link } from "react-router-dom";
import { ShareModal } from "../../components/share-modal";

export const NewsItem = () => {
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);

  return (
    <>
      <Header />
      <main className="main">
        <div className="containerr">
          <div className="news__block">
            <Link to="/">
              <img className="back_btn" src={arrowLeftIcon} alt="" />
            </Link>

            <div className="to__favorites">
              <p>29.11.2022</p>
              <div className="heart__icon">
                <img src={LikeIcon} alt="" />
              </div>
            </div>

            <div className="news_content">
              <h2 className="news__title">Заголовок новости</h2>
              <p className="text_info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                className aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="news__img">
                <img className="news__image" src={Rectangle} alt="" />
              </div>

              <p className="text_info">
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
              <a href="#">
                <img
                  className="share-icon"
                  src={ShareIcon}
                  alt=""
                  onClick={() => {
                    setShowShare(!showShare);
                  }}
                />
              </a>
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
                  <a
                    onClick={() => {
                      setShowComment(!showComment);
                    }}
                    href="#"
                  >
                    Ответить
                  </a>
                </div>
              </div>

              {showComment && (
                <div className="answer">
                  <p>Вы</p>
                  <input className="comment_input" type="text" name="" id="" />
                  <div className="registration_btn">
                    <button className="registration_button">Ответить</button>
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
