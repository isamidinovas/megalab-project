import "../../pages/FavoriteNews";
import "./style.css";
import { logoutUser } from "../../store/Profile/profile.slice";
import MenuIcon from "../../assets/img/menu-second.png";
import SearchIcon from "../../assets/img/search-second.png";
import ProfileIcon from "../../assets/img/profile-second.png";
import MegalabLogo from "../../assets/img/megalab-logo.png";
import { useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useOnClickOutside } from "../../hooks/useOutsideCliks";
export const SecondHeader = ({ getSearchText }) => {
  const [showProfile, SetShowProfile] = useState(false);
  const [showMenu, SetShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState({
    search: "",
  });
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const modalRef = useRef(null);
  const handleClick = () => {
    Swal.fire("Вы точно хотите выйти из аккаунта?")
      .then(() => dispatch(logoutUser()))
      .then(() => navigate("/registration"));
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    getSearchText(e.target.value);
  };

  const onClickOutside = () => {
    SetShowMenu(false);
    SetShowMenu(false);
    SetShowProfile(false);
  };
  useOnClickOutside(modalRef, onClickOutside);

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
            <img
              className="icon"
              src={SearchIcon}
              onClick={() => {
                if (showProfile) SetShowProfile(false);
                else if (showMenu) SetShowMenu(false);
                setShowSearch(!showSearch);
              }}
              alt="search-icon"
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
                    navigate("profile");
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
                ref={modalRef}
                className="header__icon"
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
