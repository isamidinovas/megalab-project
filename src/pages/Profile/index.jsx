import React, { useState, useEffect } from "react";
import "./style.css";
import { SecondHeader } from "../../components/header";
import { Modal } from "../../components/addPostModal";
import { useDispatch, useSelector } from "react-redux";
import { NewPost } from "../../components/NewPostItem";
import Footer from "../../components/footer/Footer";
import { getNewsThunk, postCreate } from "../../store/News/news.slice";
import { ProfileEditBlock } from "../../components/ProfileEditBlock";

export const Profile = () => {
  const myPostsIds = JSON.parse(localStorage.getItem("myPosts")) || [];
  const { newsList } = useSelector((state) => state.news);
  const post = useSelector((store) => store.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const formData = new FormData();
  return (
    <>
      <div className="container container__favorite">
        <SecondHeader />
        <div className="profile__block">
          <ProfileEditBlock />
        </div>
        <div className="profile__posts">
          <div className="container container__favorite ">
            <div className="title__button">
              <h2 className="title__favorite-new">Мои публикации</h2>
              <button className="save__button" onClick={() => setIsOpen(true)}>
                Новая публикация
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}
            </div>

            <div className="content">
              {newsList.length ? (
                <div className="post__block">
                  {newsList
                    .filter((elem) => myPostsIds.indexOf(elem.id) != -1)
                    .map((post) => (
                      <NewPost key={post.id} post={post} />
                    ))}
                </div>
              ) : (
                <h2 style={{ margin: "30px auto" }}>Идёт загрузка...</h2>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
