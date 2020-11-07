import React from "react";
import List from "../lists/List";
import Contact from "../forms/Contact";
import styles from "./PageContent.module.css";

export default function PageContent({ pageType }) {
  if (pageType === "about") {
    return (
      <div className={styles.page__content__root}>
        <div className="animate__animated animate__backInLeft">
          <div id="about__layout">
            <div>
              <h1>A little more about me.</h1>
              <p>
                As a software developer I am often presented with tasks where I
                employ solutions. Troubleshooting issues however, is not
                restricted to technology and should be emplored in the community
                to improve the standards of all its members. As a problem solver
                it is my duty to improve my communities to the best of my
                current abilities.
              </p>
              <p>
                En tant que développeur de logiciels, on me présente souvent des
                tâches où j’emploie des solutions. Toutefois, les problèmes de
                dépannage ne se limitent pas à la technologie et devraient être
                emporés dans la communauté pour améliorer les normes de tous ses
                membres. En tant que solutionneur de problèmes, il est de mon
                devoir d’améliorer mes communautés au mieux de mes capacités
                actuelles.
              </p>
            </div>
            <div id="about__lists__container">
              <div id="about__certificates">
                <h2>Certificates</h2>
                <List
                  collection={[
                    {
                      title: "Bachelors of Science in Computing Science",
                      paragraph:
                        "I obtained my BSc in Comp. Sci from The Kings' University in Edmonton, Alberta. I graduated on January, 2018.",
                      // image: {
                      //   src:
                      //     "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FThe%20Modern%20JS%20bootcamp%20nov5%202020.jpg?alt=media&token=462beee5-d9fa-4e6c-94f1-c8ae4ef7a0ff",
                      //   alt: "The modern javascript bootcamp certificate",
                      // },
                      // url:
                      //   "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FThe%20Modern%20JS%20bootcamp%20nov5%202020.jpg?alt=media&token=462beee5-d9fa-4e6c-94f1-c8ae4ef7a0ff",

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
                  ]}
                />
              </div>
              <div id="about__social__links__container">
                <h2>Social links</h2>
                <List
                  collection={[
                    {
                      title: "Twitter - @Cfeveck",
                      paragraph:
                        "Online community engagement with developers helps keep me in the loop and inspired. The twitter dev community always has something to share.",
                      url: "https://twitter.com/CFeveck",
                    },
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (pageType === "contact") {
    return (
      <div className={styles.page__content__root}>
        <div className="animate__animated animate__fadeInDown">
          <h1>Let's connect.</h1>
          <h2>I am always ready to meet amazing people.</h2>
          <div id="contact__layout">
            <div>
              <p>
                Eiusmod nulla eu pariatur nisi duis est velit labore sunt
                veniam. Est ullamco duis Lorem ad duis cillum aute fugiat Lorem.
                Nisi cupidatat ex aliqua laborum. Eiusmod aute adipisicing
                dolore eiusmod cillum amet eu qui.
              </p>
              <p>
                Nulla est qui id consectetur id aute voluptate sunt ut fugiat
                minim esse ut cillum. Fugiat tempor consectetur enim ullamco
                veniam id excepteur ullamco labore velit dolor duis ex aute.
                Elit eu quis amet ad ex irure dolore excepteur. Ex duis dolor
                pariatur cillum ut eiusmod nisi.
              </p>
            </div>
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (pageType === "portfolio") {
    return (
      <div className={styles.page__content__root}>
        <div className="animate__animated animate__fadeInUp">
          <div className="portfolio__lists__layout">
            <div>
              <h1>This is a list of my own projects.</h1>
              <div id="portfolio__layout">
                <div>
                  <p>
                    Irure ullamco aute aliquip id veniam sunt ipsum est nulla.
                    Occaecat laboris est duis dolor. Ut mollit dolor dolor
                    labore eiusmod Lorem incididunt ipsum consectetur enim
                    officia non. Voluptate ullamco non nostrud et et nisi id.
                    Sint sint fugiat mollit magna fugiat sit veniam exercitation
                    eu ex amet esse. Quis ex sint magna tempor pariatur velit
                    tempor commodo reprehenderit consectetur quis.
                  </p>
                  <p>
                    Aute velit labore aliqua ex ea do magna reprehenderit
                    pariatur. Occaecat velit Lorem labore sit cupidatat sint do
                    aute labore cupidatat excepteur elit non. Est deserunt
                    nostrud excepteur deserunt eu dolor ex minim commodo irure
                    duis ullamco.
                  </p>
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
                      {
                        title: "Mobile Pet Grooming",
                        paragraph:
                          "Let our team of pet care experts give you pets that extra care they deserve. ",
                        url: "https://petgrooming-bad02.web.app/",
                      },
                    ]}
                  />
                </div>
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
      <div className={styles.page__content__root}>
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
      <div className={styles.page__content__root}>
        <div className="animate__animated animate__backInUp">
          <h1>Hi, I'm Chris a freelancing web developer.</h1>
          <h2>
            Have a look through my web app.{" "}
            {/* <strike>and share your thoughts</strike>. */}
          </h2>
        </div>
      </div>
    );
  }
}
