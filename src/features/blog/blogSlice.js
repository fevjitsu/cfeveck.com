import { createSlice } from "@reduxjs/toolkit";
import database from "../../firebaseConnection/firebase";
export const blogSlice = createSlice({
  name: "blogger",
  initialState: {
    showBlogs: false,
    isLoading: true,
    blogs: [],
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setShowBlogs: (state, action) => {
      state.showBlogs = action.payload;
    },
    setLikeInc: (state, action) => {
      const blog = state.blogs.find((blog) => {
        return blog.id === action.payload;
      });

      blog.likes = blog.likes + 1;
    },
    setLikeDec: (state) => {
      state.likes = state.likes - 1;
    },
  },
});
export const { setIsLoading, setBlogs, setShowBlogs, setLikeDec, setLikeInc } =
  blogSlice.actions;

export const selectisLoading = (state) => state.blogger.isLoading;
export const selectBlogs = (state) => state.blogger.blogs;
export const selectShowBlogs = (state) => state.blogger.showBlogs;
export const selectLikes = (state) => state.blogger.likes;

export const setBlogsCollectionAsync = (target) => (dispatch) => {
  database
    .ref(`${target}`)
    .once("value")
    .then((snapshot) => {
      let blogs = [];

      snapshot.forEach(function (item) {
        // for items with no id use the firebase's obj id
        // db.push({ id: item.key, ...item.val() });

        blogs.push(item.val());
      });
      dispatch(setBlogs(blogs));
    })
    .catch((e) => {
      console.log("error fetching");
    });
};
export const addInitialBlogs = (blogs) => {
  database.ref("portfolioApp/blogs").update(blogs);
};
export const updateBlogs = (blogs) => (dispatch) => {
  database.ref("portfolioApp/blogs").update(blogs);
};
export default blogSlice.reducer;
