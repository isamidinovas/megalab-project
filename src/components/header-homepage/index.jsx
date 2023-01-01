import React, { useState } from "react";
import "./style.css";
import Logo from "../../assets/img/header-logo.png";
import MenuIcon from "../../assets/img/menu.png";
import SearchIcon from "../../assets/img/search.png";
import ProfileIcon from "../../assets/img/Profile-icon.png";
import { Link, useLocation, NavLink } from "react-router-dom";
function Header() {
  const [showProfile, SetShowProfile] = useState(false);
  const [showMenu, SetShowMenu] = useState(false);
  const userId = localStorage.getItem("userId");
  const location = useLocation();
  return (
    <>
      <header className="header">
        <div className="container container__favorite">
          <div className="header__inner">
            <div className="header__logo">
              <Link to={"/"}>
                {" "}
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header__icons">
              <img className="icon" src={SearchIcon} alt="" />
              <img
                className="icon"
                onClick={() => {
                  if (showMenu) SetShowMenu(false);
                  SetShowProfile(!showProfile);
                }}
                src={ProfileIcon}
                alt=""
              />
              <img
                className="icon"
                onClick={() => {
                  if (showProfile) SetShowProfile(false);
                  SetShowMenu(!showMenu);
                }}
                src={MenuIcon}
                alt=""
              />
              {showProfile && (
                <div className="modal__menu">
                  <NavLink
                    className="profile"
                    onClick={() => {
                      location("profile");
                      SetShowProfile(false);
                    }}
                    to={`/profile/${userId}`}
                  >
                    Мой профиль
                  </NavLink>
                  <a
                    className="exit__btn"
                    onClick={() => SetShowProfile(false)}
                    href="#"
                  >
                    Выйти
                  </a>
                </div>
              )}

              {showMenu && (
                <div
                  className="favorites_news"
                  onClick={() => SetShowMenu(!showMenu)}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/favoritenews"
                  >
                    Избранные новости
                  </Link>
                </div>
              )}
            </div>
          </div>
          <h1 className="title">Новости</h1>
        </div>
      </header>
    </>
  );
}

export default Header;
