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
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password2, setPassword2] = useState("");
  const [password2Error, setPasswordError2] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    const { name, value } = e.target;

    setUserdata((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

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
    if (userData.password != userData.password2) {
      alert("Пароли не совподают");
    }
  };

  const checkPassword = (e) => {
    const { name, value } = e.target;

    setUserdata((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
    setPassword(e.target.value);
    if (e.target.value.length < 7) {
      setPasswordError("Пароль должен быть не меньше 8");
    } else {
      setPasswordError("");
    }
  };
  const checkPassword2 = (e) => {
    const { name, value } = e.target;

    setUserdata((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
    setPassword2(e.target.value);
    if (e.target.value.length < 7) {
      setPasswordError2("Пароль должен быть не меньше 8");
    } else {
      setPasswordError2("");
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
                  id="pswrd"
                  // onChange={(e) => onChange(e)}
                  onChange={(e) => checkPassword(e)}
                  // onChange={(e)=> onChange(e)}
                  value={password}
                  name="password"
                  // type="password"
                  required
                  // pattern="\d [0-9]+[A-Za-z]"
                  className="registration__input"
                />
              </div>
              {passwordError && password && (
                <p className="check__password">{passwordError}</p>
              )}
              <div className="registration__item">
                <p className="registration__name">Подтверждение пароля</p>
                <input
                  onChange={(e) => checkPassword2(e)}
                  value={password2}
                  name="password2"
                  type="text"
                  required
                  pattern="\d [0-9]+[A-Za-z]"
                  className="registration__input"
                />
              </div>
              {password2Error && password2 && (
                <p className="check__password">{password2Error}</p>
              )}
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
