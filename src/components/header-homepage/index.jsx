import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Logo from "../../assets/img/header-logo.png";
import MenuIcon from "../../assets/img/menu.png";
import SearchIcon from "../../assets/img/search.png";
import ProfileIcon from "../../assets/img/Profile-icon.png";
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/Profile/profile.slice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useOnClickOutside } from "../../hooks/useOutsideCliks";

function Header({ getSearchText }) {
  const [showProfile, SetShowProfile] = useState(false);
  const [showMenu, SetShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const userId = localStorage.getItem("userId");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    Swal.fire({
      title: "Точно хотите выйти из аккаунта?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Да",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutUser());
        navigate("/registration");
      }
    });
  };
  const [searchText, setSearchText] = useState({
    search: "",
    tag: "",
  });
  const modalRef = useRef(null);

  const onClickOutside = () => {
    SetShowMenu(false);
    SetShowMenu(false);
    SetShowProfile(false);
  };
  useOnClickOutside(modalRef, onClickOutside);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    getSearchText(e.target.value);
  };

  return (
    <header className="header">
      <div className="container container__favorite">
        <div className="header__inner">
          <div className="header__logo">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="header__icons">
            <img
              className="icon"
              onClick={() => {
                if (showProfile) SetShowProfile(false);
                else if (showMenu) SetShowMenu(false);
                setShowSearch(!showSearch);
              }}
              src={SearchIcon}
              alt=""
            />
            <img
              className="icon"
              onClick={() => {
                if (showMenu) SetShowMenu(false);
                else if (showSearch) setShowSearch(false);
                SetShowProfile(!showProfile);
              }}
              src={ProfileIcon}
              alt=""
            />
            <img
              className="icon"
              onClick={() => {
                if (showProfile) SetShowProfile(false);
                else if (showSearch) setShowSearch(false);
                SetShowMenu(!showMenu);
              }}
              src={MenuIcon}
              alt=""
            />
            {showSearch && (
              <div className="header__icon" ref={modalRef}>
                <input
                  onChange={handleSearch}
                  className="search__input"
                  type="text"
                  placeholder="search"
                />
              </div>
            )}
            {showProfile && (
              <div className="header__icon--modal" ref={modalRef}>
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
                <Link className="exit__btn" onClick={handleClick}>
                  Выйти
                </Link>
              </div>
            )}
            {showMenu && (
              <div
                className="header__icon"
                ref={modalRef}
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
        <h1 className="header__title">Новости</h1>
      </div>
    </header>
  );
}

export default Header;
