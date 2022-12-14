import React from "react";
import "./style.css";
import "../Registration/style.css";
import logo from "../../assets/img/logo.png";
export const Login = () => {
  return (
    <div className="authorization_block">
      <div className="container">
        <img className="logo" src={logo} alt="" />
        <div className="registration__items">
          <div className="registration_block_item">
            <p>Никнейм</p>
            <input type="text" className="registration_input" />
          </div>
          <div className="registration_block_item">
            <p>Пароль</p>
            <input type="text" className="registration_input" />
          </div>
        </div>
        <div className="registration_btn">
          <button className="registration_button">Войти</button>
        </div>
      </div>
    </div>
  );
};
