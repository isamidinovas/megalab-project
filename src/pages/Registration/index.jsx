import React from "react";
import "./style.css";
import logo from "../../assets/img/logo.png";
export const RegistrationPage = () => {
  return (
    <div>

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

    </div>
  );
};
