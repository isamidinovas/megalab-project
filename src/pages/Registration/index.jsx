import React from "react";
import "./style.css";
import logo from "../../assets/img/logo.png";
export const RegistrationPage = () => {
  return (
    <div>
      <header className="header">
        <div className="containerr">
          <div className="header__inner">
            <div className="header__logo">
              <img src="./img/Group (1) 1 (1).png" alt="" />
            </div>
            <div className="header__icons">
              <img className="icon" src="./img/Group 1.png" alt="" />
              <img className="icon" src="./img/search.png" alt="" />
              <img className="icon" src="./img/menu.png" alt="" />
            </div>
          </div>
          <h1 className="title">Новости</h1>
        </div>
      </header>
      <div className="registration_block">
        <div className="container">
          <img className="logo" src={logo} alt="" />
          <div className="registration__items">
            <div className="registration_block_item">
              <p>Фамилия</p>
              <input type="text" className="registration_input" />
            </div>
            <div className="registration_block_item">
              <p>Имя</p>
              <input type="text" className="registration_input" />
            </div>
            <div className="registration_block_item">
              <p>Никнейм</p>
              <input type="text" className="registration_input" />
            </div>
            <div className="registration_block_item">
              <p>Пароль</p>
              <input type="text" className="registration_input" />
            </div>
            <div className="registration_block_item">
              <p>Подтверждение пароля</p>
              <input type="text" className="registration_input" />
            </div>
          </div>{" "}
        </div>
        <div className="registration_btn">
          <button class="registration_button">Регистрация</button>
        </div>

        <p className="sign_in">
          Уже есть логин? <a href="#">Войти</a>
        </p>
      </div>
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__icon">
            <img src="./img/Group (1) 1 (1).png" alt="" />
          </div>
          <div className="footer__text">
            <p>Мой профиль</p>
            <p>Избранные новости</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
