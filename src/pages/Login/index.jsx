import React from "react";
import "./style.css";
import "../Registration/style.css";
import logo from "../../assets/img/logo.png";
export const Login = () => {
  return (
    <div className="registration">
      <div className="container">
        <div className="registration__inner">
          <div className="registration__modal">
            <img className="logo" src={logo} alt="logo" />
            <form className="registration__form">
              <div className="registration__item">
                <p>Никнейм</p>
                <input type="text" className="registration__input" />
              </div>
              <div className="registration__item">
                <p>Пароль</p>
                <input type="text" className="registration__input" />
              </div>

              <div className="registration__btn">
                <button className="registration__button" type="submit">
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
