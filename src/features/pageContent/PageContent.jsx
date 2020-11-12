import React from "react";
import List from "../lists/List";
import Contact from "../contact/Contact";
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
                As a web developer I create web applications or websites using
                well supported tools to avoid delays in product creation. I also
                host using reliable services that scale as a product grows.
                Improve a product's visibility using Search Engine Optimization
                analytics. I offer all of my services on a scale so let's
                connect and create something amazing.
              </p>
              <p>
                En tant que développeur Web, je crée des applications Web ou des
                sites Web à l'aide d'outils bien pris en charge pour éviter les
                retards dans la création de produits. J'héberge également des
                services fiables qui évoluent à mesure que le produit se
                développe. Améliorez la visibilité d'un produit à l'aide des
                analyses d'optimisation des moteurs de recherche. J'offre tous
                mes services à une échelle alors connectons-nous et créons
                quelque chose d'extraordinaire.
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
                        "I obtained my BSc in Comp. Sci with a minor in Psychology from The Kings' University in Edmonton, Alberta. I graduated on January, 2018.",
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
                    {
                      title: "Advanced Open Water Diver",
                      paragraph:
                        "Cert# 206711. I am looking to get more diving experience in Alberta in the up coming summer period. Always nice to see the world from different perspectives.",
                      // image: {
                      //   src:
                      //     "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FThe%20Modern%20JS%20bootcamp%20nov5%202020.jpg?alt=media&token=462beee5-d9fa-4e6c-94f1-c8ae4ef7a0ff",
                      //   alt: "The modern javascript bootcamp certificate",
                      // },
                      // url:
                      //   "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/certificates%2FThe%20Modern%20JS%20bootcamp%20nov5%202020.jpg?alt=media&token=462beee5-d9fa-4e6c-94f1-c8ae4ef7a0ff",

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

          <div id="contact__layout">
            <div>
              <p>
                I'm always ready to meet amazing people. Let's connect and build
                something amazing!
              </p>
              <p>
                Je suis toujours prêt à rencontrer des gens formidables.
                Connectons-nous et construisons quelque chose d'incroyable!
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
                    As a web developer I create web apps and websites using well
                    supported tools. I also host and provide search engine
                    optimization for sites. Check out some of my projects.
                  </p>
                  <p>
                    En tant que développeur Web, je crée des applications Web et
                    des sites Web à l'aide d'outils bien pris en charge.
                    J'héberge et assure également l'optimisation des moteurs de
                    recherche de sites. Découvrez certains de mes projets
                    répertoriés.
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
