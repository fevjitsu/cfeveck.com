import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setBlogs, selectBlogs } from "./blogSlice";
import { collection, getDocs, onSnapshot, doc, docs } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getAuth } from "firebase/auth";
import firestore from "../../firebaseConnection/firebase";
import Header from "../header/Header";
import styles from "./Blogger.module.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { CircularProgress, CssBaseline } from "@material-ui/core";
export default function Blogger() {
  const [blogs, setBlogs] = useState();
  const history = useHistory();

  const auth = getAuth();
  const dispatchGetBlogs = useCallback(() => {
    getDocs(collection(firestore, "blogs")).then((snapshot) => {
      let data = [];
      snapshot.docs.forEach((item) => {
        data.push({ id: item.id, ...item.data() });
      });
      console.log(data);
      setBlogs(data);
    });
  }, [blogs]);

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
        // if (change.type === "added") {
        //   console.log("New city: ", change.doc.data());
        // }
        if (change.type === "modified") {
          // console.log("Modified city: ", change.doc.data());
          dispatchGetBlogs();
        }
        // if (change.type === "removed") {
        //   console.log("Removed city: ", change.doc.data());
        // }
      });
    });
    return () => {
      unsub();
    };
  }, [dispatchGetBlogs]);

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);
  return (
    <React.Fragment>
      <Header title={"My blogger: Glimpse at my interests"} />
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
                    <div className={styles.blogImageContainer}>
                      <img
                        className={styles.blogImage}
                        src={blog.src}
                        alt={blog.alt}
                      />
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
