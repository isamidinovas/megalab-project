import React, { useState, useEffect } from "react";
import "./style.css";
import { SecondHeader } from "../../components/header";
import { Modal } from "../../components/addPostModal";
import { useDispatch, useSelector } from "react-redux";
import { NewPost } from "../../components/NewPostItem";
import Footer from "../../components/footer/Footer";
import { ProfileEditBlock } from "../../components/ProfileEditBlock";
import { getMyPosts } from "../../store/Post/post.slice";
import Spinner from "../../assets/img/Spinner.svg";
export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { myPostsList, loading } = useSelector((state) => state.post);
  const { userInfo } = useSelector((state) => state.profile);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (value) => {
    setSearch(value);
  };
  useEffect(() => {
    dispatch(getMyPosts({ search, author: userInfo.nickname }));
  }, [myPostsList.length, search]);

  return (
    <>
      <SecondHeader getSearchText={handleSearch} />
      <div className="container container__favorite">
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
            {loading ? (
              <div className="loaded__block">
                <img src={Spinner} alt="" />
              </div>
            ) : myPostsList.length ? (
              <div className="post__block">
                {myPostsList.map((post, index) => (
                  <NewPost key={index} post={post} />
                ))}
              </div>
            ) : (
              <h2>Публикаций пока нет!</h2>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
