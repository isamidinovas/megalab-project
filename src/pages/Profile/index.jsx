import React, { useState, useEffect } from "react";
import { SecondHeader } from "../../components/header/SecondHeader";
import DefaultIcon from "../../assets/img/default-profile-icon.png";
import { accountUser } from "../../store/Profile/profile.slice";
import "./style.css";
import download from "../../assets/img/download.png";
import deleteIcon from "../../assets/img/delete-icon.png";
import Footer from "../../components/footer/Footer";
import LikeIcon from "../../assets/img/like-icon.png";
import Rectangle from "../../assets/img/Rectangle.png";
import ShareIcon from "../../assets/img/share.png";
import { Link } from "react-router-dom";
import { Modal } from "../../components/addPostModal/modal";
import { useDispatch, useSelector } from "react-redux";
import { ShareModal } from "../../components/shareModal/shareModal";
export const Profile = () => {
  const { userInfo } = useSelector((state) => state.profile);
  console.log("TEST2", userInfo);
  const [userData, setUserdata] = useState({
    nickname: "",
    name: "",
    last_name: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const img = selectedImage ? URL.createObjectURL(selectedImage) : DefaultIcon;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(accountUser(userData));
  }, [dispatch]);
  return (
    <>
      <div className="container container__favorite">
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
              <input
                className="info-item_input"
                defaultValue={userInfo.last_name}
                type="text"
              />
            </div>
            <div className="info-item">
              <span className="info-item_title">Имя</span>
              <input
                defaultValue={userInfo.name}
                className="info-item_input"
                type="text"
              />
            </div>
            <div className="info-item">
              <span className="info-item_title">Никнейм</span>
              <input
                className="info-item_input"
                defaultValue={userInfo.nickname}
                type="text"
              />
            </div>
            <div className="button-wrap">
              <button className="save-button">Сохранить</button>
            </div>
          </div>
        </div>

        <main className="main">
          <div className="container container__favorite ">
            <div className="title-button">
              <h2 className="title__favorite-new">Мои публикации</h2>
              <button className="save-button" onClick={() => setIsOpen(true)}>
                Новая публикация
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}
            </div>

            <div className="content">
              <div className="news__block">
                <div className="news__item">
                  <div className="news__img">
                    <img className="news__img" src={Rectangle} alt="" />
                  </div>
                  <div className="news__info">
                    <div className="to__favorites">
                      <p>29.11.2022</p>
                      <div className="like__icon">
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

                <div className="news__item">
                  <div className="news__img">
                    <img className="news__img" src={Rectangle} alt="" />
                  </div>{" "}
                  <div className="news__info news__info--favorite_block">
                    <div className="to__favorites">
                      <p>29.11.2022</p>
                      <div className="like__icon">
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
                <div className="news__item">
                  <div className="news__img">
                    <img className="news__img" src={Rectangle} alt="" />
                  </div>
                  <div className="news__info news__info--favorite_block">
                    <div className="to__favorites">
                      <p>29.11.2022</p>
                      <div className="like__icon">
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
