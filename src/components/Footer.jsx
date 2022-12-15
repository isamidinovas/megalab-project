import React from "react";
import "./style.css";
import Logo from "../assets/img/header-logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__icon">
          <img src={Logo} alt="" />
        </div>
        <div className="footer__text">
          <Link to="/profil" className="profil__link">Мой профиль</Link>
          <p>Избранные новости</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
