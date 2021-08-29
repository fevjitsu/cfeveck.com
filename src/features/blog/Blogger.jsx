import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./Blogger.module.css";
import { Grid, Typography, Button } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { setLikeInc, updateBlogs } from "./blogSlice";
export default function Blogger({ blogs }) {
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);
  useEffect(() => {
    return () => stableDispatch(updateBlogs(blogs));
  }, [blogs, stableDispatch]);

  return (
    <Grid container display="flex" className={styles.blogs}>
      {blogs?.map((blog, key) => {
        return (
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignContent="center"
            data-aos="fade-up"
            className={styles.blog}
            key={`blog_${key}`}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4">{blog.title}</Typography>
              <Button
                color="primary"
                onClick={() => {
                  dispatch(setLikeInc(blog.id));
                }}>
                <ThumbUpIcon />
                &nbsp;
                <Typography component="span" variant="subtitle1">
                  {blog.likes}
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <img className={styles.blogImage} src={blog.src} alt={blog.alt} />
            </Grid>

            <Grid container>
              {blog.body.map((paragraph, parakey) => {
                return (
                  <Grid item key={`blogPara${parakey}`}>
                    <Typography paragraph className={styles.blogParagraph}>
                      {paragraph}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>

            {blog.url && blog.url.length > 0 && <a href={blog.url}>Go!</a>}
          </Grid>
        );
      })}
    </Grid>
  );
}
