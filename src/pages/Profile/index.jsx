import React, { useState, useEffect } from "react";
import "./style.css";
import { SecondHeader } from "../../components/header";
import { Modal } from "../../components/addPostModal";
import { useDispatch, useSelector } from "react-redux";
import { NewPost } from "../../components/NewPostItem";
import Footer from "../../components/footer/Footer";
import { ProfileEditBlock } from "../../components/ProfileEditBlock";
import { getMyPosts } from "../../store/Post/post.slice";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { myPostsList } = useSelector((state) => state.post);
  const { userInfo } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPosts(userInfo.nickname));
  }, [userInfo.nickname, myPostsList.length]);

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
              {myPostsList.length ? (
                <div className="post__block">
                  {myPostsList.map((post, index) => (
                    <NewPost key={index} post={post} />
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
