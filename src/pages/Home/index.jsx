import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { News } from "../../components/NewsItem";
import "./style.css";
export const HomePage = () => {

  return (
    <>
      <Header />
      <div className="containerr">
        <div className="content">
          <div className="filter__block">
            <p className="filter_text">Фильтрация</p>
            <div className="checkboxs">
              <label class="checkboxWrap">
                Sport
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>

              <label class="checkboxWrap">
                Политика
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>

              <label class="checkboxWrap">
                Звезды
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>

              <label class="checkboxWrap">
                <span className="checkbox-text">Искусство</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>

              <label class="checkboxWrap">
                Мода
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              </div>
              <div className="registration_btn">
              <button className="registration_button">Применить</button>
              </div>
            </div>
          
        
          <div className="news__content">
          <News/>
          <News/>
          <News/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
