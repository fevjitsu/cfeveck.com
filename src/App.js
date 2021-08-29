import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "./App.css";
import Blogger from "./features/blog/Blogger";
import MyModal from "./features/modal/MyModal";
import UnsubModal from "./features/modal/MyModal";
import TravelAdvisor from "./features/travelAdvisor/TravelAdvisor";
import { getPlacesData } from "./api";
import {
  setPlaceData,
  selectChild,
  handleChildClicked,
  setShowTravelAdvisor,
  selectShowTravelAdvisor,
} from "./features/travelAdvisor/travelAdvisorSlice";
import {
  selectBlogs,
  selectShowBlogs,
  setShowBlogs,
  setBlogsCollectionAsync,
  addInitialBlogs,
  setIsLoading,
  selectisLoading,
} from "./features/blog/blogSlice";
import { CircularProgress } from "@material-ui/core";
import { uid } from "uid";
export default function App() {
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);
  const childClicked = useSelector(selectChild);
  const showBlogs = useSelector(selectShowBlogs);
  const selectIsBlogsLoading = useSelector(selectisLoading);
  const blogs = useSelector(selectBlogs);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState({});
  const showTravelAdvisor = useSelector(selectShowTravelAdvisor);
  const [showMain, setShowMain] = useState(true);
  const [showUnsub, setShowUnsub] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const DisplayMain = (show) => {
    if (show)
      return (
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
                      onClick={() => {
                        dispatch(setShowBlogs(true));
                        dispatch(setShowTravelAdvisor(false));
                      }}
                      className="btn btn-info">
                      My Blog
                    </button>
                    &nbsp;
                    <button
                      onClick={() => {
                        dispatch(setShowTravelAdvisor(true));
                        dispatch(setShowBlogs(false));
                      }}
                      className="btn btn-info">
                      Nearby food
                    </button>
                    &nbsp;
                    <button
                      onClick={() => {
                        window.open(
                          "https://chat-app-8136a.firebaseapp.com/",
                          "_blank"
                        );
                      }}
                      className="btn btn-info">
                      Chat room
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    className="logosList"
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Ffirebase.png?alt=media&token=1f0e2f3b-d4a6-477b-8b95-8b8038115092"
                    }
                    alt="firebase logo"
                  />
                  <img
                    className="logosList"
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Freact-logo.svg?alt=media&token=9529007b-92fe-411b-b3d1-9fbe3f97fddf"
                    }
                    alt="react logo"
                  />
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
      );
  };
  const DisplayBlog = (show, blogs) => {
    if (show)
      return (
        <div className="container">
          <div className="row icon-list">
            <button
              className="btn btn-info "
              onClick={() => {
                dispatch(setShowBlogs(false));
              }}>
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
          <div className="iframeContainer">
            <h3 style={{ marginTop: "2rem", textAlign: "center" }}>
              My hope is to get this song stuck in your head. The point also, is
              to use Google analytics to see the moment where people just get
              annoyed and stop the video.
            </h3>
            <iframe
              id="ytplayer"
              className="iframeItem"
              title="myFrame"
              type="text/html"
              style={{ marginTop: "0.5rem" }}
              height="300"
              width="100%"
              src="https://www.youtube.com/embed/Kgjkth6BRRY?autoplay=1&origin=http://example.com"
              frameBorder="0"></iframe>
          </div>
          <div className="row">
            <div className="d-flex flex-column blog-list">
              {selectIsBlogsLoading ? (
                <CircularProgress size={"4rem"} />
              ) : (
                <Blogger blogs={[...blogs].reverse()} />
              )}
            </div>
          </div>
        </div>
      );
  };
  const DisplayTravelAdvisor = (show) => {
    if (show)
      return (
        <div className="m-2 p-2">
          <div className="row icon-list">
            <button
              className="btn btn-info "
              onClick={() => {
                dispatch(setShowTravelAdvisor(false));
              }}>
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
          <hr />
          <TravelAdvisor
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            handleChildClicked={handleChildClicked}
            childClicked={childClicked}
          />
        </div>
      );
  };
  const handleUnsub = () => {};

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
    setTimeout(() => setShowModal(true), 1500);
    // addInitialBlogs([
    //   {
    //     id: uid(),
    //     title: "I’m in Montreal again!",
    //     body: [
    //       "After I got my vaccinations I figured I would go to Montreal and visit a friend I've known since high school. The trip was a great opportunity to network and have a good time so I did just that. I do always enjoy the city when I visit. From just walking around pointlessly to always being near great food and although the contact was limited it still was enjoyed.",
    //       "I got to meet my friend's doggo. A pug named Captain. Loves people that dog, moreso than the owner. Another trip will always be on the way!",
    //     ],
    //     src: "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2F20210710_223937.jpg?alt=media&token=0d4d9ef7-e4cf-4967-861d-aa1b488d70e9",
    //     alt: "A selfie of Chris Feveck.",
    //     likes: 0,
    //   },
    //   {
    //     id: uid(),
    //     title: "Another happy client!",
    //     body: [
    //       "Here is one of the websites I created for a start up. A Montreal based HVAC installation company. Check them out if you need an installation or assessment.",
    //       "Check me out if you need a website!",
    //     ],
    //     src: "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2FScreen%20Shot%202021-08-05%20at%208.08.00%20AM.png?alt=media&token=b4e86d6d-8af7-4ef6-9f10-a209e90b30fd",
    //     alt: "A patio of people with the text superior atmostphere.",
    //     url: "http://superior-atmosphere.com/",
    //     likes: 0,
    //   },
    //   {
    //     id: uid(),
    //     title: "The challenge of fitness.",
    //     body: [
    //       "This might be the 5th attempt at establishing a routine for my fitness. It can be an overwhelming task in understanding what physical activity I need to engage.",
    //       "I currently feel less flexible however, hot yoga was my last major sustained activity, and my lats tell me that my back needs to become stronger.",
    //       "The yoga will take care of the stiffness but the other aspects need to be prioritized. Throwing a weighted ball from hand to hand with the arms stretched overhead is a gread way to help the core. These exercises have been negleted and need to become the center of attention.",
    //     ],
    //     src: "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fmepointing.jpg?alt=media&token=e7fbe011-0007-4a85-ad5c-87107383974e",
    //     alt: "A picture of me with the mountain range in the background and praire land in the foreground.",
    //     // url: "http://superior-atmosphere.com/",
    //     likes: 0,
    //   },
    //   {
    //     id: uid(),
    //     title: "The revamped Lakers.",
    //     body: [
    //       "The start of the NBA (basketball) season starts in just over a month and without shame I tell you I am an 8/10 for excitement.",
    //       "I have always had a 'sus' relationship with sports. Some seasons I have little to no interest in either basketball or football/soccer and other seasons, I stand on the couch's arm rest with hands in the air.",
    //       "This year I am 100% watching the Lakers and possibly the soccer team Paris-Saint Germain as I enjoy Leo Messi. Back to Laker nation though. I'm excited to see superstars of old try to demolish the studs of the league. The NBA narratives are quite the hype builder.",
    //       "I am a Raptors fan as well and yes they #2 to the Lakers in the battle for my support. That aside Spicy P (Pascal Siakam) has had a rough bout with the fans recently. Just in 2019 he was a Robbin to Kawhi's Batman and yet the fans wanted his head for his recent performances. I want Siakam to just demolish his opponents as a finger to the Raptor fans that put him in the trash can. That would be a beautiful Raptor narrative to follow. ",
    //     ],
    //     src: "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Frevampedlakers.png?alt=media&token=8ce22dc6-6f98-4abf-aad8-d0058a144d7c",
    //     alt: "The new memebers of the L.A Lakers roster for 2021/2022 season. The Russell Westbrook saga.",
    //     // url: "http://superior-atmosphere.com/",
    //     likes: 0,
    //   },
    // ]);
  }, []);

  useEffect(() => {
    if (!showBlogs && !showTravelAdvisor) setShowMain(true);

    if (showBlogs || showTravelAdvisor) {
      if (showBlogs) {
        stableDispatch(setBlogsCollectionAsync("portfolioApp/blogs"));
        dispatch(setIsLoading(false));
      }

      setShowMain(false);
    }
  }, [showBlogs, showTravelAdvisor, stableDispatch, dispatch]);

  useEffect(() => {
    //gets the data from api source and populates the redux store
    if (bounds)
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        dispatch(setPlaceData(data));
      });
  }, [coordinates, bounds, dispatch]);

  return (
    <div className="landing-container">
      <MyModal openModal={showModal} closeModal={() => setShowModal(false)} />
      <UnsubModal
        title="This removes you from the email list and you won't get any more notifications from me."
        subtitle="to unsubscribe"
        buttonText="remove me"
        openModal={showUnsub}
        closeModal={() => setShowUnsub(false)}
        onClick={handleUnsub}
      />

      <div style={{ marginTop: "2rem" }} className="jumbotron text-center">
        <h1>Hi, I'm Chris.</h1>
        <h3>I build web and mobile applications.</h3>
      </div>
      {DisplayTravelAdvisor(showTravelAdvisor)}
      {DisplayBlog(showBlogs, blogs)}
      {DisplayMain(showMain)}
      <h6 style={{ cursor: "pointer" }} onClick={() => setShowUnsub(true)}>
        &nbsp;unsubscribe here
      </h6>
    </div>
  );
}
