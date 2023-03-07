import React, { useEffect, useState } from "react";
import { firebase } from "../../firebaseConnection/firebase";
import Header from "../header/NavMenu";
import styles from "./Blogger.module.css";
import isURL from "validator/lib/isURL";
export default function AddBlog() {
  const history = useHistory();
  const displayName = useSelector(selectDisplayName);
  const [valid, setValid] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState([]);
  const [alt, setAlt] = useState("");
  const [redirect, setRedirect] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imageFiles, setImageFiles] = useState(undefined);
  const [imageURL, setImageURL] = useState(
    "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8"
  );
  const validationCheck = (title, body, alt, redirect) => {
    title.trim();

    alt.trim();
    redirect.trim();
    setValid(false);
    if (title && title.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
    if (body) {
      setValid(true);
    } else {
      setValid(false);
    }
    if (alt && alt.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }

    if (redirect) {
      if (!isURL(redirect)) {
        setErrorMessage("redirect url is invalid");
      }
    }
  };

  const handleAddForm = (event) => {
    event.preventDefault();
    body.split("\n");

    //create validation criteria
    if (valid) {
      if (imageFiles) handleUploadImage(imageFiles);
      firebase
        .firestore()
        .collection("blogs")
        .add({
          author: displayName,
          title,
          body,
          src: imageURL,
          alt,
          likes: 0,
          url: redirect,
          timestamp: firebase.firestore.Timestamp.now(),
        })
        .then(() => {})
        .catch(() => {});
    } else {
      setErrorMessage("Invalid form entry");
    }
  };
  const handleUploadImage = (image) => {
    const uploadTask = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // console.log({ snapshot });
      },
      (error) => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref(`images`)
          .child(`${image.name}`)
          .getDownloadURL()
          .then((url) => {
            setImageURL(url);
          });
      }
    );
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      }
    });
  }, [history]);

  useEffect(() => {
    validationCheck(title, body, alt, redirect);
  }, [title, redirect, alt, body]);
  return (
    <div className={styles.addBlogContainer}>
      <Header title={`Add a new blog post, ${displayName}`} />
      <form onSubmit={handleAddForm} className={styles.addBlogForm}>
        <label htmlFor="title">Blog title</label>
        <input
          type="text"
          id={"title"}
          name={"title"}
          placeholder="Blog title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <label htmlFor="blog">Blog body</label>
        <textarea
          required
          id="body"
          name={"body"}
          placeholder="Body content of blog."
          value={body}
          onChange={(event) => setBody(event.target.value)}></textarea>

        <label htmlFor="alt">Image description</label>
        <input
          type="text"
          id={"alt"}
          name={"alt"}
          placeholder="Provide a useful description of the uploaded image"
          value={alt}
          onChange={(event) => setAlt(event.target.value)}
          required
        />
        <label htmlFor="file">Upload image</label>
        <input
          required
          type="file"
          name="imageFile"
          onChange={(e) => {
            // set image
            setImageFiles(e.target.files[0]);
          }}
        />
        <label htmlFor="redirecrt">Redirect url</label>
        <input
          type="text"
          id={"redirect"}
          name={"redirect"}
          placeholder="Redirect url"
          value={redirect}
          onChange={(event) => setRedirect(event.target.value)}
        />
        <input type="submit" value="Submit" className={"btn btn-primary"} />
      </form>
    </div>
  );
}
