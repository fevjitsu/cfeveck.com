import React, { useEffect, useState } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "./App.css";
import "./Landing.css";
import Blogger from "./features/blog/Blogger";
import MyModal from "./features/modal/MyModal";
export default function Landing() {
  let [showBlog, setShowBlog] = useState(false);
  let blogs = [
    {
      id: "1",
      title: "I’m in Montreal again!",
      body: [
        "After I got my vaccinations I figured I would go to Montreal and visit a friend I've known since high school. The trip was a great opportunity to network and have a good time so I did just that. I do always enjoy the city when I visit. From just walking around pointlessly to always being near great food and although the contact was limited it still was enjoyed.",
        "I got to meet my friend's doggo. A pug named Captain. Loves people that dog, moreso than the owner. Another trip will always be on the way!",
      ],
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2F20210710_223937.jpg?alt=media&token=0d4d9ef7-e4cf-4967-861d-aa1b488d70e9",
      alt: "A selfie of Chris Feveck.",
    },
    {
      id: "2",
      title: "Another happy client!",
      body: [
        "Here is one of the websites I created for a start up. A Montreal based HVAC installation company. Check them out if you need an installation or assessment.",
        "Check me out if you need a website!",
      ],
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2FScreen%20Shot%202021-08-05%20at%208.08.00%20AM.png?alt=media&token=b4e86d6d-8af7-4ef6-9f10-a209e90b30fd",
      alt: "A patio of people with the text superior atmostphere.",
      url: "http://superior-atmosphere.com/",
    },
    {
      id: "3",
      title: "The challenge of fitness.",
      body: [
        "This might be the 5th attempt at establishing a routine for my fitness. It can be an overwhelming task in understanding what physical activity I need to engage.",
        "I currently feel less flexible however, hot yoga was my last major sustained activity, and my lats tell me that my back needs to become stronger.",
        "The yoga will take care of the stiffness but the other aspects need to be prioritized. Throwing a weighted ball from hand to hand with the arms stretched overhead is a gread way to help the core. These exercises have been negleted and need to become the center of attention.",
      ],
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fmepointing.jpg?alt=media&token=e7fbe011-0007-4a85-ad5c-87107383974e",
      alt: "A picture of me with the mountain range in the background and praire land in the foreground.",
      // url: "http://superior-atmosphere.com/",
    },
  ];
  let [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowModal(true), 2000);
  }, []);
  return (
    <div className="landing-container">
      <MyModal openModal={showModal} closeModal={() => setShowModal(false)} />
      <div className="jumbotron text-center">
        <h1>Hi, I'm Chris.</h1>
        <h3>I build web and mobile applications.</h3>
      </div>
      {showBlog ? (
        <div className="container">
          <div className="row icon-list">
            <button
              className="btn btn-info "
              onClick={() => setShowBlog(false)}>
              Back
            </button>

            <div className="icon-list">
              <a href="https://twitter.com/Cfeveck">
                <TwitterIcon color="action" fontSize="large" />
              </a>
              <a href="https://github.com/fevjitsu">
                <GitHubIcon color="action" fontSize="large" />
              </a>
              <a href="mailto:christopher.feveck@refined-reality.com">
                <EmailIcon color="action" fontSize="large" />
              </a>
            </div>
          </div>

          <div className="row">
            <div className="d-flex flex-column blog-list">
              <Blogger blogs={blogs} />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div>
              <div className="d-flex flex-row">
                <div>
                  <p>
                    Implementing your app ideas, developing custom software to
                    assist your business growth, or creating an online presence
                    for you by moi! Let my knowledge of techy dev tools help
                    give you that competitive edge.
                  </p>
                  <div>
                    <button
                      onClick={() => setShowBlog(true)}
                      className="btn btn-info">
                      My Blog
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    style={{ maxWidth: "350px", maxHeight: "480px" }}
                    className="landing-image"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fisome.png?alt=media&token=43fc26c0-1d0f-4dc3-be84-2156d6dcafed"
                    alt="screen with binary numbers"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <img
                  className="peeking-image"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fpeekingme.png?alt=media&token=06b0185d-1342-48b2-8f32-6cee2e586f36"
                  alt="isometric of head of myself peeking"
                />
              </div>
            </div>

            <div className="icon-list">
              <a href="https://twitter.com/Cfeveck">
                <TwitterIcon color="action" fontSize="large" />
              </a>
              <a href="https://github.com/fevjitsu">
                <GitHubIcon color="action" fontSize="large" />
              </a>
              <a href="mailto:christopher.feveck@refined-reality.com">
                <EmailIcon color="action" fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
