import React, { useState } from "react";
import "./style.css";
import "../Registration/style.css";
import logo from "../../assets/img/logo.png";
import { loginUser } from "../../store/Profile/profile.slice";
import { useDispatch } from "react-redux";
export const Login = () => {
  const [userData, setUserdata] = useState({
    nickname: "",
    password: "",
  });
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

    dispatch(loginUser(userData));
  };
  return (
    <div className="registration">
      <div className="container">
        <div className="registration__inner">
          <div className="registration__modal">
            <img className="logo" src={logo} alt="logo" />
            <form className="registration__form">
              <div className="registration__item">
                <p>Никнейм</p>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="registration__input"
                />
              </div>
              <div className="registration__item">
                <p>Пароль</p>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="registration__input"
                />
              </div>

              <div className="registration__btn">
                <button
                  onClick={handleClick}
                  className="registration__button"
                  type="submit"
                >
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
