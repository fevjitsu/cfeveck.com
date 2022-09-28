import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setBlogs, selectBlogs } from "./blogSlice";
import { collection, getDocs, onSnapshot, doc, docs } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getAuth } from "firebase/auth";
import firestore from "../../firebaseConnection/firebase";
import NavigationMenu from "../navigationMenu/NavigationMenu";
import styles from "./Blogger.module.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { CircularProgress, CssBaseline } from "@material-ui/core";
export default function Blogger() {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const history = useHistory();
  const functions = getFunctions();
  const upvote = httpsCallable(functions, "upvote");
  const auth = getAuth();
  const dispatchGetBlogs = useCallback(() => {
    getDocs(collection(firestore, "blogs")).then((snapshot) => {
      let data = [];
      snapshot.docs.forEach((item) => {
        data.push({ id: item.id, ...item.data() });
      });
      dispatch(setBlogs(data));
    });
  }, [dispatch]);

  const handleLike = (blogId) => {
    upvote({ id: blogId }).catch((error) => {
      if (error.message && error.message.length > 0) {
        console.log("upvote error::", error.message);
      }
    });
  };

  useEffect(() => {
    dispatchGetBlogs();
  }, [dispatchGetBlogs]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      }
    });
  }, [history, auth]);

  // real time updates for likes
  useEffect(() => {
    const unsub = onSnapshot(collection(firestore, "blogs"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "modified") {
          dispatchGetBlogs();
        }
      });
    });
    return () => {
      unsub();
    };
  }, [dispatchGetBlogs]);

  return (
    <React.Fragment>
      <NavigationMenu title={"My blogger: Glimpse at my interests"} />
      <CssBaseline />
      <div className={styles.bloggerContainer}>
        {blogs ? (
          blogs.map((blog, key) => {
            return (
              <div className={styles.blogContainer} key={key}>
                <div>
                  <div className={styles.blogHeader}>
                    <h2 className={styles.blogTitle}>{blog.title}</h2>
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
                      <div>
                        <button
                          className={`${styles.likesButton} btn btn-secondary`}
                          onClick={() => handleLike(blog.id)}>
                          <span className={styles.likesCount}>
                            {blog.likes}
                          </span>
                          &nbsp; | &nbsp;
                          <ThumbUpIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.blogParagraphContainer}>
                  {blog.body.map((paragraph, parakey) => {
                    return (
                      <p key={parakey} className={styles.blogParagraph}>
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {blog.url && blog.url.length > 0 && (
                  <span className={styles.blogURL}>
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      <button>Go!</button>
                    </a>
                  </span>
                )}
              </div>
            );
          })
        ) : (
          <div>
            <CircularProgress size="large" />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
