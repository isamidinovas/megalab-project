import React, { useState } from "react";
import "./style.css";
import { postCreate } from "../../store/Post/post.slice";
import download from "../../assets/img/download.png";
import CloseIcon from "../../assets/img/x.png";
import { useDispatch, useSelector } from "react-redux";

export const Modal = ({ setIsOpen }) => {
  const { newsList } = useSelector((state) => state.news);
  const post = useSelector((state) => state.post);
  const [postData, setPostData] = useState({
    title: newsList.title,
    text: newsList.text,
    tag: "r",
    image: "",
    short_desc: newsList.short_desc,
  });
  

  // function handleSelectImage(image) {
  //   let formData = new FormData();
  //   formData.set("image", post.image, image.name);
  //   formData.set("title", post.title);
  //   formData.set("text", post.text);
  //   formData.set("tag", post.tag);

  //   dispatch(postCreate(formData));
  // }
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

    setIsOpen(false);
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
                  // onChange={(event) => {
                  //   handleSelectImage(event.target.files[0]);
                  // }}
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
                value={postData.title}
              />
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Краткое описание</span>
              <input
                onChange={(e) => onChange(e)}
                name="short_desc"
                className="modal-input"
                type="text"
                value={postData.short_desc}
              />
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Текст новости</span>
              <textarea
                onChange={(e) => onChange(e)}
                name="text"
                className="text-area"
                value={postData.text}
              />
            </div>
            <div className="modal-content-item">
              <span className="modal-item_title">Выбрать категорию</span>
              <select className="select-category" name="tag" id="">
                <option name="tag" value={postData.tag}>
                  #начили
                </option>
                <option name="tag" value={postData.tag}>
                  #жизнь
                </option>
                <option name="tag" value={postData.tag}>
                  #законджунгли
                </option>
                <option name="tag" value={postData.tag}>
                  #миржесток
                </option>
              </select>
            </div>
            <div className="modal-content-tag">
              <span className="modal-item_title">#Не выбрано</span>
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
