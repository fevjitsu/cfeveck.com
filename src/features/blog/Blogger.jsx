import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setBlogs, selectBlogs } from "./blogSlice";
import { collection, getDocs, onSnapshot, doc, docs } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getAuth } from "firebase/auth";
import firestore from "../../firebaseConnection/firebase";
import NavMenu from "../header/NavMenu";
import styles from "./Blogger.module.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { CircularProgress, CssBaseline } from "@material-ui/core";
export default function Blogger() {
  const [blogs, setBlogs] = useState();
  let [track, setTrack] = useState(0);
  const history = useHistory();

  const auth = getAuth();
  const getBlogCollection = async () => {
    const data = [];
    const blogsnap = await getDocs(collection(firestore, "blogs"));
    blogsnap.docs.forEach((doc) => {
      const item = { id: doc.id, ...doc.data() };
      data.push(item);
    });
    setBlogs(data);
  };

  const incramentTrack = () => setTrack(++track);
  const decrementTrack = () => setTrack(--track);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      }
    });
  }, [history, auth]);

  useEffect(() => {
    getBlogCollection();
  }, []);
  useEffect(() => {
    if (blogs) {
      if (track < 0) {
        setTrack(0);
      }

      if (track >= blogs.length - 1) {
        setTrack(blogs.length - 1);
      }
    }
  }, [track, blogs]);

  return (
    <React.Fragment>
      <NavMenu title={"My blogger: Glimpse at my interests"} />
      <CssBaseline />
      <div className={styles.bloggerContainer}>
        <div className={styles.bloggerContainerButtons}>
          <div>
            <button onClick={decrementTrack}>Prev Post</button>
          </div>
          <div>
            <button onClick={incramentTrack}>Next Post</button>
          </div>
        </div>
        {blogs ? (
          blogs.map((blog, key) => {
            if (track === key)
              return (
                <div className={styles.blogItem} key={key}>
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
                    {blog.paragraphs
                      ? blog.paragraphs.map((paragraph, parakey) => {
                          return (
                            <p key={parakey} className={styles.blogParagraph}>
                              {paragraph}
                            </p>
                          );
                        })
                      : null}
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
