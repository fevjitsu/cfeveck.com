import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLikeInc, setBlogsCollectionAsync, selectBlogs } from "./blogSlice";
import database, { firebase } from "../../firebaseConnection/firebase";
import Header from "../header/Header";
import styles from "./Blogger.module.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
export default function Blogger() {
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);
  const history = useHistory();

  const handleLike = (blogId) => {
    const upvote = firebase.functions().httpsCallable("upvote");
    upvote({ id: blogId }).catch((error) => {
      console.log(error.message);
    });
  };
  const blogs = useSelector(selectBlogs);

  useEffect(() => {
    stableDispatch(setBlogsCollectionAsync());
  });
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <React.Fragment>
      <Header title={"My blogger: Glimpse at my interests"} />
      <div className={styles.bloggerContainer}>
        {blogs?.map((blog, key) => {
          return (
            <div className={styles.blogContainer} key={key}>
              <div>
                <div className={styles.blogHeader}>
                  <h2 className={styles.title}>{blog.title}</h2>
                  <hr />
                </div>
                <div className={styles.imgLikeRow}>
                  {" "}
                  <div className={styles.blogImageContainer}>
                    <img
                      className={styles.blogImage}
                      src={blog.src}
                      alt={blog.alt}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}>
                    <span className={styles.likesCount}>{blog.likes}</span>

                    <button
                      className={`${styles.likesButton} btn btn-secondary`}
                      onClick={() => handleLike(blog.id)}>
                      <ThumbUpIcon />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.paragraphContainer}>
                {blog.body.map((paragraph, parakey) => {
                  return (
                    <p key={parakey} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {blog.url && blog.url.length > 0 && (
                <span>
                  <a className={"btn btn-primary"} href={blog.url}>
                    Go!
                  </a>
                </span>
              )}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
