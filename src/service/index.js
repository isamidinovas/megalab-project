import axios from "axios";
export const postsService = {
  getPosts() {
    const token = localStorage.getItem("token");
    return axios
      .get("https://megalab.pythonanywhere.com/post/", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((res) => res.data);
  },
};
