import React, { useEffect, useState } from "react";
import "./style.css";
import { postCreate } from "../../store/Post/post.slice";
import download from "../../assets/img/download.png";
import CloseIcon from "../../assets/img/x.png";
import { useDispatch, useSelector } from "react-redux";
import { getTagList } from "../../store/Post/tag.slice";
import { getNewsThunk } from "../../store/News/news.slice";

export const Modal = ({ setIsOpen }) => {
  const { newsList } = useSelector((state) => state.news);
  const { tagList } = useSelector((state) => state.tags);

  const post = useSelector((state) => state.post);
  const [postData, setPostData] = useState({
    title: newsList.title,
    text: newsList.text,
    tag: newsList.tag,
    short_desc: newsList.short_desc,
  });
  useEffect(() => {
    dispatch(getTagList());
  }, []);

  function handleSelectImage(image) {
    let formData = new FormData();
    formData.set("image", image, image.name);
    formData.set("title", newsList.title);
    formData.set("text", newsList.text);
    formData.set("tag", newsList.tag);

    dispatch(postCreate(formData));
  }
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
    // dispatch(getNewsThunk());
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
                <label htmlFor="fileImg" className="select-photo-lable">
                  Добавить фото <img src={download} />
                </label>
                <input
                  onChange={(event) => {
                    handleSelectImage(event.target.files[0]);
                  }}
                  id="fileImg"
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
              {tagList.length > 0 ? (
                <select
                  onChange={(e) => onChange(e)}
                  className="select-category"
                  name="tag"
                >
                  {tagList.map((tag) => (
                    <option name="tag">{tag.name}</option>
                  ))}
                </select>
              ) : null}
            </div>
            <div className="modal-content-tag">
              <input
                value={postData.tag}
                onChange={(e) => onChange(e)}
                name="tag"
                className="modal-item_input"
                placeholder="tag"
              ></input>
            </div>
            <div className="button-wrap2">
              <button className="save__button" onClick={handleClick}>
                Создать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
