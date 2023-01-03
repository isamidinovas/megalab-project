import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../store/Profile/profile.slice";
import Swal from "sweetalert2";

export const RegistrationPage = () => {
  const datas = useSelector((state) => state.profile.userData);
  const { status, registrationErrMessage } = useSelector(
    (state) => state.profile
  );

  const [userData, setUserdata] = useState({
    nickname: "",
    name: "",
    last_name: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();
  function onChange(e) {
    const { name, value } = e.target;

    setUserdata((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  }

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    dispatch(authenticateUser(userData));
    if (
      !userData.nickname ||
      !userData.name ||
      !userData.last_name ||
      !userData.password ||
      !userData.password2
    ) {
      alert("Заполните все поля");
      return;
    }
  };
  return (
    <div className="registration">
      <div className="container">
        <div className="registration__inner">
          <div className="registration__modal">
            <img className="logo" src={logo} alt="logo" />
            <form className="registration__form">
              <div className="registration__item">
                <p>Фамилия</p>
                <input
                  onChange={(e) => onChange(e)}
                  name="last_name"
                  type="text"
                  required
                  className="registration__input"
                />
              </div>
              <div className="registration__item">
                <p>Имя</p>
                <input
                  onChange={(e) => onChange(e)}
                  name="name"
                  type="text"
                  required
                  className="registration__input"
                />
              </div>
              <div className="registration__item">
                <p>Никнейм</p>
                <input
                  onChange={(e) => onChange(e)}
                  name="nickname"
                  type="text"
                  required
                  className="registration__input"
                />
              </div>
              <div className="registration__item">
                <p>Пароль</p>
                <input
                  onChange={(e) => onChange(e)}
                  name="password"
                  type="password"
                  required
                  pattern="\d [0-9]+[A-Za-z]"
                  className="registration__input"
                />
              </div>
              <div className="registration__item">
                <p className="registration__name">Подтверждение пароля</p>
                <input
                  onChange={(e) => onChange(e)}
                  name="password2"
                  type="text"
                  required
                  pattern="\d [0-9]+[A-Za-z]"
                  className="registration__input"
                />
              </div>
              <div className="registration__btn">
                <button
                  onClick={handleClick}
                  className="registration__button"
                  type="submit"
                >
                  Регистрация
                </button>
                <p className="registration__err">{registrationErrMessage}</p>
                {status === "resolved" &&
                  Swal.fire("вы успешно зарегистрированы", "", "success").then(
                    navigate("/login")
                  )}
              </div>
              <p className="sign__in">
                Уже есть логин? <Link to="/login">Войти</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
