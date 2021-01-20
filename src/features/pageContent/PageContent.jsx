import React, { useState } from "react";
import List from "../lists/List";
import Contact from "../contact/Contact";
import styles from "./PageContent.module.css";

export default function PageContent({ pageType }) {
  let [showContact, setShowContact] = useState(false);
  let [showAboutCertificates, setShowAboutCertificates] = useState(false);
  let [showAboutSocial, setShowAboutSocial] = useState(false);
  if (pageType === "about") {
    return (
      <div
        className={`${styles.about__container} ${styles.page__content__root}`}
      >
        <div className="animate__animated animate__backInLeft">
          <div className={styles.about__layout}>
            {showAboutCertificates || showAboutSocial ? null : (
              <div id={styles.about__layout__paragraphs}>
                <h1>A little more about what I do.</h1>
                <p>

                  
                  As a web developer I create web applications or websites using
                  well supported tools to avoid delays in product creation. I
                  also host using reliable services that scale as a product
                  grows. Improve a product's visibility using Search Engine
                  Optimization analytics. I offer all of my services on a scale
                  so let's connect and create something amazing.
                </p>
              </div>
            )}
            <div id="about__lists__container">
              <div id="about__certificates">
                {showAboutCertificates && !showAboutSocial ? (
                  <h2
                    style={{ cursor: "pointer" }}
                    className="active animate__animated animate__bounce animate__delay-2s"
                    onClick={() => {
                      setShowAboutCertificates(!showAboutCertificates);
                      setShowAboutSocial(false);
                    }}
                  >
                    Certificates
                  </h2>
                ) : (
                  <h2
                    style={{ cursor: "pointer" }}
                    className="animate__animated animate__bounce animate__delay-2s"
                    onClick={() => {
                      setShowAboutCertificates(!showAboutCertificates);
                      setShowAboutSocial(false);
                    }}
                  >
                    Certificates
                  </h2>
                )}
                {showAboutCertificates && !showAboutSocial && (
                  <List
                    collection={[
                      {
                        title: "PHP for Beginners - Become a PHP Master",
                        paragraph:
                          "My certification of completion in PHP development.",
                        image: {
                          src:
                            "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FPHP%20for%20Beginners-%20Become%20a%20PHP%20master.jpg?alt=media&token=5b96adad-8f16-4171-9235-3930de2ef782",
                          alt: "PHP for Beginners - Become a PHP Master",
                        },
                        url:
                          "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FPHP%20for%20Beginners-%20Become%20a%20PHP%20master.jpg?alt=media&token=5b96adad-8f16-4171-9235-3930de2ef782",

                        handleClick: function () {},
                      },

                      {
                        title: "The Complete Node.js Developer Course",
                        paragraph:
                          "My certification of completion in NodeJs development.",
                        image: {
                          src:
                            "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FThe%20Complete%20Node%20Js%20Developer%20Course.jpg?alt=media&token=a642dff0-53f7-4ddd-9259-cc75b8a49993",
                          alt: "The Complete Node.js Developer Course",
                        },
                        url:
                          "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FThe%20Complete%20Node%20Js%20Developer%20Course.jpg?alt=media&token=a642dff0-53f7-4ddd-9259-cc75b8a49993",

                        handleClick: function () {},
                      },
                      {
                        title: "The modern javascript bootcamp",
                        paragraph:
                          "My certification of completion in Modern Javascript.",
                        image: {
                          src:
                            "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FThe%20Modern%20JS%20bootcamp%20nov5%202020.jpg?alt=media&token=462beee5-d9fa-4e6c-94f1-c8ae4ef7a0ff",
                          alt: "The modern javascript bootcamp certificate",
                        },
                        url:
                          "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FThe%20Modern%20JS%20bootcamp%20nov5%202020.jpg?alt=media&token=462beee5-d9fa-4e6c-94f1-c8ae4ef7a0ff",

                        handleClick: function () {},
                      },
                      {
                        title:
                          "The Complete React Developer Course (w/ Hooks and Redux)",
                        paragraph:
                          "My certification of completion in React development.",
                        image: {
                          src:
                            "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FReact%20Developer%20Certificaation%20Nov%2014%202020.jpg?alt=media&token=a6a835e0-39f7-4f95-b45f-3eb089ae1fc1",
                          alt: "The Complete React Developer certificate",
                        },
                        url:
                          "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FThe%20Modern%20JS%20bootcamp%20nov5%202020.jpg?alt=media&token=462beee5-d9fa-4e6c-94f1-c8ae4ef7a0ff",

                        handleClick: function () {},
                      },
                    ]}
                  />
                )}
              </div>
              <div id="about__social__links__container">
                {!showAboutCertificates && showAboutSocial ? (
                  <h2
                    style={{ cursor: "pointer" }}
                    className="active animate__animated animate__bounce animate__delay-2s"
                    onClick={() => {
                      setShowAboutSocial(!showAboutSocial);
                      setShowAboutCertificates(false);
                    }}
                  >
                    Social links
                  </h2>
                ) : (
                  <h2
                    style={{ cursor: "pointer" }}
                    className="animate__animated animate__bounce animate__delay-2s"
                    onClick={() => {
                      setShowAboutSocial(!showAboutSocial);
                      setShowAboutCertificates(false);
                    }}
                  >
                    Social links
                  </h2>
                )}

                {showAboutSocial && !showAboutCertificates && (
                  <List
                    collection={[
                      {
                        title: "GitHub",
                        paragraph:
                          "I use GitHub because I've had my external HDD, laptop, then USB die within 48 hours. Repositories can save your sanity.",
                        url: "https://github.com/fevjitsu",
                      },
                      {
                        title: "CodePen - @Cfeveck",
                        paragraph:
                          "When I want to play with a new concept or create a prototype quickly I go to CodePen",
                        url: "https://codepen.io/cfeveck",
                      },
                    ]}
                    unordered={true}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (pageType === "contact") {
    return (
      <div
        className={`${styles.contact__container} ${styles.page__content__root}`}
      >
        <div className="animate__animated animate__fadeInDown">
          <div className={`${styles.contact__layout}`}>
            {!showContact && (
              <React.Fragment>
                <h1>Let's connect.</h1>
                <div
                  className={`animate__animated animate__bounce animate__delay-2s ${styles.contact__icon__container}`}
                  onClick={() => {
                    setShowContact(true);
                  }}
                >
                  <img
                    src={"/mail.svg"}
                    alt="Mail free vector icons designed by Freepik https://www.flaticon.com/free-icon/mail_2590818?term=contact via @flaticon "
                    className={styles.contact__icon}
                  />
                </div>
                <div>
                  <p>
                    I'm always happy to meet amazing people. Let's connect and
                    build something amazing!
                  </p>
                </div>
              </React.Fragment>
            )}

            {showContact && (
              <div className="animate__animated animate__backInUp">
                <Contact
                  handleClose={() => {
                    setShowContact(false);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else if (pageType === "portfolio") {
    return (
      <div
        className={`${styles.portfolio__container} ${styles.page__content__root}`}
      >
        <div className="animate__animated animate__fadeInUp">
          <div className={`${styles.portfolio__layout}`}>
            <div>
              <div>
                <h1>This is a list of my own projects.</h1>
                <p>
                  As a web developer I create web apps and websites using well
                  supported tools. I also host and provide search engine
                  optimization for sites. Check out some of my projects.
                </p>
                {/* <p>
                    En tant que développeur Web, je crée des applications Web et
                    des sites Web à l'aide d'outils bien pris en charge.
                    J'héberge et assure également l'optimisation des moteurs de
                    recherche de sites. Découvrez certains de mes projets
                    répertoriés.
                  </p> */}
              </div>
              <div>
                <List
                  collection={[
                    {
                      title: "The Cookbook",
                      paragraph:
                        "A hub of recipies I have tried and would like to share with everyone. ",
                      url: "https://cookbook-ac8a6.web.app/",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // else if (pageType == "login") {
  //   return (
  //     <div className={styles.page__content__root}>
  //       {" "}
  //       <div className="animate__animated animate__backInRight">
  //         <h1>Hi [logged in as]</h1>
  //       </div>
  //     </div>
  //   );
  // }
  else if (pageType === "register") {
    return (
      <div
        className={`${styles.register__container} ${styles.page__content__root}`}
      >
        {" "}
        <div className="animate__animated animate__backInRight">
          <h1>
            <strike>Register to see more content.</strike>
          </h1>
          <h1>
            <em>Content on the way.</em>
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`${styles.home__container} ${styles.page__content__root}`}
      >
        <div
          className={`animate__animated animate__backInUp ${styles.home__layout}`}
        >
          <h1>Hi, I'm Chris, a freelancing web developer.</h1>
          <h2>Look through my web app since you're here.</h2>
        </div>
      </div>
    );
  }
}
