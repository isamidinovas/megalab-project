import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import "../Registration/style.css";
import logo from "../../assets/img/logo.png";
import { loginUser } from "../../store/Profile/profile.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";

export const Login = ({ setIsLoggendIn, isLoggendIn, setUserNickname }) => {
  const userToken = useSelector((state) => state.profile.userToken);
  const errorMessage = useSelector((state) => state.profile.errorMessage);
  const navigate = useNavigate();

  const [userData, setUserdata] = useState({
    nickname: "",
    password: "",
  });

  useEffect(() => {
    if (userToken) navigate("/");
  }, [userToken, errorMessage]);

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
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
    setIsLoggendIn(true);
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
                  name="nickname"
                  onChange={(e) => onChange(e)}
                  type="text"
                  required
                  className="registration__input"
                />
              </div>
              <div className="registration__item">
                <p>Пароль</p>
                <input
                  name="password"
                  onChange={(e) => onChange(e)}
                  type="password"
                  required
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
                <p className="registration__err">{errorMessage}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
