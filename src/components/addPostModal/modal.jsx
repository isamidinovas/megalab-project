import React, { useState } from "react";
import "./modal.css";
import { postCreate } from "../../store/Post/post.slice";
import download from "../../assets/img/download.png";
import CloseIcon from "../../assets/img/x.png";
import { useDispatch } from "react-redux";

export const Modal = ({ setIsOpen }) => {
  const [postData, setPostData] = useState({
    title: "",
    text: "",
    tag: "",
    image: "",
    short_desc: "",
  });
  console.log("postData", postData);
  function onChange(e) {
    const { name, value } = e.target;

    setPostData((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  }
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    dispatch(postCreate(postData));
  };
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="modal">
          <button onClick={() => setIsOpen(false)} className="closeBtn">
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
                  onChange={(e) => onChange(e)}
                  id="filePicker"
                  name="image"
                  style={{ visibility: "hidden" }}
                  type={"file"}
                />
              </div>
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Заголовок</span>
              <input
                onChange={(e) => onChange(e)}
                name="title"
                className="modal-input"
                type="text"
              />
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Краткое описание</span>
              <input
                onChange={(e) => onChange(e)}
                name="short_desc"
                className="modal-input"
                type="text"
              />
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Текст новости</span>
              <textarea
                onChange={(e) => onChange(e)}
                name="text"
                className="text-area"
              />
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Выбрать категорию</span>
              <select className="select-category" name="tag" id="">
                <option value="sdf">#начили</option>
                <option value="sdf">#жизнь</option>
                <option value="sdf">#законджунгли</option>
                <option value="sdf">#миржесток</option>
              </select>
            </div>

            <div className="button-wrap2">
              <button className="save__button" onClick={handleClick}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
