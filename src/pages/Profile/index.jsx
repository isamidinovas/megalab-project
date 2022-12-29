import React, { useState, useEffect } from "react";
import { SecondHeader } from "../../components/header/SecondHeader";
import { Modal } from "../../components/addPostModal/modal";
import { useDispatch, useSelector } from "react-redux";
import { NewPost } from "../../components/NewPostItem";
import Footer from "../../components/footer/Footer";
import DefaultIcon from "../../assets/img/default-profile-icon.png";
import { accountUser } from "../../store/Profile/profile.slice";
import { editUserInfo } from "../../store/Profile/profile.slice";

import "./style.css";
import download from "../../assets/img/download.png";
import deleteIcon from "../../assets/img/delete-icon.png";
import { getNewsThunk } from "../../store/Post/post.slice";

export const Profile = () => {
  const post = useSelector((store) => store.post);
  const { userInfo } = useSelector((state) => state.profile);
  console.log("info", userInfo);
  const [userInfos, setUserInfos] = useState({
    nickname: userInfo.nickname,
    name: userInfo.name,
    last_name: userInfo.last_name,
  });

  useEffect(() => {
    setUserInfos({
      nickname: userInfo.nickname,
      name: userInfo.name,
      last_name: userInfo.last_name,
    });
  }, [userInfo]);

  function onChange(e) {
    const { name, value } = e.target;

    setUserInfos((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  }

  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const img = userInfo.profile_image
    ? `https://megalab.pythonanywhere.com${userInfo.profile_image}`
    : DefaultIcon;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(accountUser());
    // dispatch(getNewsThunk())
  }, [dispatch]);
  const handleClick = () => {
    dispatch(editUserInfo(userInfos));
  };
  function handleSelectImage(image) {
    let formData = new FormData();
    formData.set("profile_image", image, image.name);
    formData.set("nickname", userInfo.nickname);
    formData.set("name", userInfo.name);
    formData.set("last_name", userInfo.last_name);

    dispatch(editUserInfo(formData));
  }

  function handleDeleteImage() {
    let formData = new FormData();
    formData.set("profile_image", null);
    formData.set("nickname", userInfo.nickname);
    formData.set("name", userInfo.name);
    formData.set("last_name", userInfo.last_name);

    dispatch(editUserInfo(formData));
  }
  console.log("posts in profile", post);

  const formData = new FormData();
  return (
    <>
      <div className="container container__favorite">
        <SecondHeader />
        <div className="profile__block">
          <div>
            <img
              className="profile_img"
              src={img}
              width="199px"
              height="199px"
              alt=""
            />
            <div>
              <div className="icon-add">
                <label htmlFor="filePicker">
                  Добавить фото <img src={download} />
                </label>
                <input
                  id="filePicker"
                  name="profile_image"
                  onChange={(event) => {
                    handleSelectImage(event.target.files[0]);
                  }}
                  style={{ visibility: "hidden" }}
                  type="file"
                />
              </div>
              <div onClick={handleDeleteImage} className="icon-delete">
                Удалить <img src={deleteIcon} />
              </div>
            </div>
          </div>
          <div className="info__edit">
            <div className="info__item">
              <span className="info__title">Фамилия</span>
              <input
                name="last_name"
                onChange={(e) => onChange(e)}
                className="info__input"
                defaultValue={userInfo.last_name}
                type="text"
              />
            </div>
            <div className="info__item">
              <span className="info__title">Имя</span>
              <input
                name="name"
                onChange={(e) => onChange(e)}
                defaultValue={userInfo.name}
                className="info__input"
                type="text"
              />
            </div>
            <div className="info__item">
              <span className="info__title">Никнейм</span>
              <input
                name="nickname"
                onChange={(e) => onChange(e)}
                className="info__input"
                defaultValue={userInfo.nickname}
                type="text"
              />
            </div>
            <div className="button__wrap">
              <button onClick={handleClick} className="save__button">
                Сохранить
              </button>
            </div>
          </div>
        </div>

        <main className="main">
          <div className="container container__favorite ">
            <div className="title__button">
              <h2 className="title__favorite-new">Мои публикации</h2>
              <button className="save__button" onClick={() => setIsOpen(true)}>
                Новая публикация
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}
            </div>

            <div className="content">
              {post.length ? (
                <div className="news__block">
                  {post.map((post) => (
                    <NewPost key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <h2 style={{ margin: "0 auto" }}>Публикаций пока нет!</h2>
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
