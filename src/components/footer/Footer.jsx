import React from "react";
import "./Footer.css";
import Logo from "../../assets/img/header-logo.png";
import { Link } from "react-router-dom";
function Footer() {
  const userId = localStorage.getItem("userId");
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__icon">
          <img src={Logo} alt="" />
        </div>
        <div className="footer__text">
          <Link to={`/profile/${userId}`} className="profil__link">
            Мой профиль
          </Link>
          <Link to="/favoritenews" className="profil__link">
            Избранные новости
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
