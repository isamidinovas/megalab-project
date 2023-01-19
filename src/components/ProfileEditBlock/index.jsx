import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { accountUser, editUserInfo } from "../../store/Profile/profile.slice";
import download from "../../assets/img/download.png";
import deleteIcon from "../../assets/img/delete-icon.png";
import DefaultIcon from "../../assets/img/default-profile-icon.png";
export const ProfileEditBlock = () => {
  const { userInfo } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const img = userInfo.profile_image
    ? `https://megalab.pythonanywhere.com${userInfo.profile_image}`
    : DefaultIcon;
  function handleSelectImage(image) {
    let formData = new FormData();
    formData.set("profile_image", image, image.name);
    formData.set("nickname", userInfo.nickname);
    formData.set("name", userInfo.name);
    formData.set("last_name", userInfo.last_name);

    dispatch(editUserInfo(formData));
  }
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
  useEffect(() => {
    dispatch(accountUser());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(editUserInfo(userInfos));
  };
  return (
    <>
      <div className="profile__avatar">
        <img
          className="profile_img"
          src={img}
          width="199px"
          height="199px"
          alt=""
        />
        <div className="profile__edit">
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
          <div className="icon-delete">
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
          <button onClick={handleClick} className="save__button ">
            Сохранить
          </button>
        </div>
      </div>
    </>
  );
};
