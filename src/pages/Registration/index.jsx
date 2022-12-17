import React from "react";
import "./style.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
export const RegistrationPage = () => {
  return (
    <div className="registration">
      <div className="container">
        <div className="registration__inner">
          <div className="registration__modal">
            <img className="logo" src={logo} alt="logo" />
            <form className="registration__form">
              <div className="registration__item">
                <p>Фамилия</p>
                <input type="text" className="registration__input" />
              </div>
              <div className="registration__item">
                <p>Имя</p>
                <input type="text" className="registration__input" />
              </div>
              <div className="registration__item">
                <p>Никнейм</p>
                <input type="text" className="registration__input" />
              </div>
              <div className="registration__item">
                <p>Пароль</p>
                <input type="text" className="registration__input" />
              </div>
              <div className="registration__item">
                <p className="registration__name">Подтверждение пароля</p>
                <input type="text" className="registration__input" />
              </div>
              <div className="registration__btn">
                <button className="registration__button" type="submit">
                  Регистрация
                </button>
              </div>
              <p className="sign__in">
                Уже есть логин? <Link to="/login">Войти</Link>
              </p>
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
