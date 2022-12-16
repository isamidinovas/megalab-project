import React from "react";
import "./modal.css";
import download from "../assets/img/download.png";
import CloseIcon from "../assets/img/x.png";
export const Modal = ({ setIsOpen }) => {
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="modal">
          <button onClick={() => setIsOpen(false)} className="closeBtn">
            {" "}
            <img src={CloseIcon} alt="" />
          </button>
          <div className="info-edit">
            <div className="modal-content-item">
              <span className="modal-item_title">Обложка новости</span>
              <div className="select-photo-wrap">
                <label htmlFor="filePicker" className="select-photo-lable">
                  Добавить фото <img src={download} />
                </label>
                <input
                  id="filePicker"
                  name="myImage"
                  style={{ visibility: "hidden" }}
                  type={"file"}
                />
              </div>
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Заголовок</span>
              <input className="modal-input" type="text" />
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Краткое описание</span>
              <input className="modal-input" type="text" />
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Текст новости</span>
              <textarea className="text-area" />
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Выбрать категорию</span>
              <select className="select-category" name="Не выбрано" id="">
                <option value="sdf">Не выбрано</option>
                <option value="sdf">Не выбрано</option>
                <option value="sdf">Не выбрано</option>
                <option value="sdf">Не выбрано</option>
              </select>
            </div>

            <div className="button-wrap2">
              <button class="save-button">Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
