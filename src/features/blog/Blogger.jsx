import React, { useEffect, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import styles from "./Blogger.module.css";
import {
  Grid,
  Typography,
  Button,
  Paper,
  Card,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { setLikeInc, updateBlogs } from "./blogSlice";
export default function Blogger({ blogs }) {
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    return () => stableDispatch(updateBlogs(blogs));
  }, [blogs, stableDispatch]);

  return (
    <Grid display="flex">
      {" "}
      {blogs?.map((blog, key) => {
        return (
          <Paper
            key={`blog_${key}`}
            elevation={3}
            style={{ opacity: "0.8" }}
            className="m-3 p-3">
            <Grid container className="m-3" data-aos="fade-up">
              <Grid container display="flex" direction="row">
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
                  <img
                    className={styles.blogImage}
                    src={blog.src}
                    alt={blog.alt}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                display="flex"
                direction="column"
                justifyContent="space-evenly">
                {blog.body.map((paragraph, parakey) => {
                  return (
                    <Grid item key={`blogPara${parakey}`}>
                      <Paper elevation={3} className="p-2 m-2">
                        <Typography variant="body2" paragraph>
                          {paragraph}
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>

              {blog.url && blog.url.length > 0 && <a href={blog.url}>Go!</a>}
            </Grid>
          </Paper>
        );
      })}
    </Grid>
  );
}
