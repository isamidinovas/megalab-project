import React, { useState } from "react";
import { SecondHeader } from "../../components/SecondHeader";
import DefaultIcon from "../../assets/img/default-profile-icon.png";
import "./style.css";
import download from "../../assets/img/download.png";
import deleteIcon from "../../assets/img/delete-icon.png";
import Footer from "../../components/Footer";

import LikeIcon from "../../assets/img/like-icon.png";
import Rectangle from "../../assets/img/Rectangle.png";
import ShareIcon from "../../assets/img/share.png";
import { Link } from "react-router-dom";
import {Modal} from "../../components/modal";
import { useSelector } from "react-redux";
export const Profile = () => {
  const { profile } = useSelector(state => state)
  console.log(profile)
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const img = selectedImage ? URL.createObjectURL(selectedImage) : DefaultIcon;
  return (
    <>
      <div className="containerr">
        <SecondHeader />

        <div className="profile-block">
          <div>
            <img src={img} width="199px" height="199px" alt="" />
            <div>
              <div className="icon-add">
                <label htmlFor="filePicker">
                  Добавить фото <img src={download} />
                </label>
                <input
                  id="filePicker"
                  name="myImage"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                  style={{ visibility: "hidden" }}
                  type={"file"}
                />
              </div>
              <div
                onClick={() => setSelectedImage(null)}
                className="icon-delete"
              >
                Удалить <img src={deleteIcon} />
              </div>
            </div>
          </div>
          <div className="info-edit">
            <div className="info-item">
              <span className="info-item_title">Фамилия</span>
              <input className="info-item_input" defaultValue={profile.surname} type="text" />
            </div>
            <div className="info-item">
              <span className="info-item_title">Имя</span>
              <input defaultValue={profile.name}  className="info-item_input" type="text" />
            </div>
            <div className="info-item">
              <span className="info-item_title">Никнейм</span>
              <input className="info-item_input" defaultValue={profile.login}  type="text" />
            </div>
            <div className="button-wrap">
              <button class="save-button">Сохранить</button>
            </div>
          </div>
        </div>

        <main class="main">
          <div class="containerr">
            <div className="title-button">
              <h2 class="title__favorite-new">Мои публикации</h2>
              <button class="save-button" onClick={() => setIsOpen(true)}>
                Новая публикация
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}
            </div>

            <div class="content">
              <div class="news__block">
                <div className="news__item">
                  <div className="news__img">
                    <img className="news__img" src={Rectangle} alt="" />
                  </div>
                  <div className="news__info">
                    <div className="to__favorites">
                      <p>29.11.2022</p>
                      <div className="heart__icon">
                        <img src={deleteIcon} alt="" />
                      </div>
                    </div>
                    <h2>Заголовок новости</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>

                    <Link to="/new">Читать дальше</Link>
                    <div className="share">
                      <img src={ShareIcon} alt="" />
                    </div>
                  </div>
                </div>

                <div class="news__item">
                  <div class="news__img">
                    <img class="news__img" src={Rectangle} alt="" />
                  </div>{" "}
                  <div class="news__info news__info--favorite_block">
                    <div class="to__favorites">
                      <p>29.11.2022</p>
                      <div class="like__icon">
                        <img src={deleteIcon} alt="" />
                      </div>
                    </div>
                    <h2>Заголовок новости</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>
                    <Link to="/new">Читать дальше</Link>
                    <div class="share">
                      <img src={ShareIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div class="news__item">
                  <div class="news__img">
                    <img class="news__img" src={Rectangle} alt="" />
                  </div>
                  <div class="news__info news__info--favorite_block">
                    <div class="to__favorites">
                      <p>29.11.2022</p>
                      <div class="like__icon">
                        <img src={deleteIcon} alt="" />
                      </div>
                    </div>
                    <h2>Заголовок новости</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>
                    <Link to="/new">Читать дальше</Link>
                    <div class="share">
                      <img src={ShareIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
