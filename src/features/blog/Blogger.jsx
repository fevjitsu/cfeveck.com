import React from "react";
import styles from "./Blogger.module.css";
export default function Blogger({ blogs }) {
  return (
    <div className={styles.blogs}>
      {blogs.map((blog, key) => {
        return (
          <div className={styles.blog} key={`blog${key}`}>
            <div className="d-flex flex-row flex-wrap-reverse align-items-center">
              <div className="col-sm-12 col-md-8 col-lg-8">
                <h3>{blog.title}</h3>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <img
                  className={styles.blogImage}
                  src={blog.src}
                  alt={blog.alt}
                />
              </div>
            </div>

            <hr />
            {blog.body.map((paragraph, parakey) => {
              return (
                <p className={styles.blogParagraph} key={`blogPara${parakey}`}>
                  {paragraph}
                </p>
              );
            })}
            {blog.url && blog.url.length > 0 && <a href={blog.url}>Go!</a>}
          </div>
        );
      })}
    </div>
  );
}
