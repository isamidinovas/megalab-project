import "../../pages/FavoriteNews";
import "./style.css";
import MenuIcon from "../../assets/img/menu-second.png";
import SearchIcon from "../../assets/img/search-second.png";
import ProfileIcon from "../../assets/img/profile-second.png";
import MegalabLogo from "../../assets/img/megalab-logo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
export const SecondHeader = () => {
  const [showProfile, SetShowProfile] = useState(false);
  const [showMenu, SetShowMenu] = useState(false);
  const location = useLocation();
  const userId = localStorage.getItem("userId");
  return (
    <header className="header__favorite">
      <div className="container container__favorite">
        <div className="header__inner">
          <div className="header__logo">
            <Link to={"/"}>
              <img src={MegalabLogo} alt="" />
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
                <Link
                  className="profile"
                  onClick={() => {
                    location("profile");
                    SetShowProfile(false);
                  }}
                  to={`/profile/${userId}`}
                >
                  Мой профиль
                </Link>

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
      </div>
    </header>
  );
};
