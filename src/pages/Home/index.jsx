import React from "react";
import "./style.css";
export const HomePage = () => {
  return (
    <div classname="containerr">
      <div classname="content">
        <div classname="filter__block">
          <p className="filter_text">Фильтрация</p>
          <ul>
            <li classname="filter_item">
              <img classname="checkbox" src="" alt="" />
              <span classname="checkbox__text">Спорт</span>
            </li>
            <li classname="filter_item">
              <img classname="checkbox" src="" alt="" />
              <span classname="checkbox__text">Политика</span>
            </li>
            <li classname="filter_item">
              <img classname="checkbox" src="" alt="" />
              <span classname="checkbox__text">Звезды</span>
            </li>
            <li classname="filter_item">
              <img classname="checkbox" src="" alt="" />
              <span classname="checkbox__text">Искусство</span>
            </li>
            <li classname="filter_item">
              <img classname="checkbox" src="" alt="" />
              <span classname="checkbox__text">Мода</span>
            </li>
          </ul>
          <div classname="registration_btn">
            <button classname="registration_button">Применить</button>
          </div>
        </div>
        <div classname="news__block">
          <div classname="news__item">
            <div classname="news__img">
              <img classname="news__img" src="" alt="" />
            </div>
            <div classname="news__info">
              <div classname="to__favorites">
                <p>29.11.2022</p>
                <div classname="heart__icon">
                  <img src="" alt="" />
                </div>
              </div>
              <h2>Заголовок новости</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <a href="#">Читать дальше</a>
              <div classname="share">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
