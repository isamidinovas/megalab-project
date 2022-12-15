import '../pages/FavoriteNews'
import MenuIcon from "../assets/img/menu-second.png";
import SearchIcon from "../assets/img/search-second.png";
import ProfileIcon from "../assets/img/profile-second.png";
import MegalabLogo from "../assets/img/megalab-logo.png";
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
export const SecondHeader = () => {
    const [showProfile, SetShowProfile] = useState(false);
    const [showMenu, SetShowMenu] = useState(false);
    const location = useLocation()
    return (
        <header class="header__favorites_news">
        <div class="containerr">
          <div class="header__inner">
            <div class="header__logo">
            <Link to={'/'}>  <img src={MegalabLogo} alt="" /></Link>
             
            </div>
            <div class="header__icons">
              <img class="icon icon_grey" src={SearchIcon} alt="" />
              <img
                className="icon"
                onClick={() =>{
                  if(showMenu) SetShowMenu(false)
                  SetShowProfile(!showProfile)
                }}
                src={ProfileIcon}
                alt=""
              />
              <img
                className="icon"
                onClick={() => {
                  if(showProfile) SetShowProfile(false)
                  SetShowMenu(!showMenu)
                }}
                src={MenuIcon}
                alt=""
              />
               {showProfile && (
                <div class="modal__menu">
                             <Link
                    class="profile"
                    onClick={() => {
                      location('profile')
                      SetShowProfile(false)
                    }}
                    to="/profile"
                  >
                    Мой профиль
                  </Link>
                  <a
                    class="exit__btn"
                    onClick={() => SetShowProfile(false)}
                    href="#"
                  >
                    Выйти
                  </a>
                </div>
              )}

              {showMenu && (
                <div class="favorites_news" onClick={() => SetShowMenu(!showMenu)}>
                <Link style={{    textDecoration: "none",
    color: "#000"}} to="/favoritenews">Избранные новости</Link>  
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    )
}