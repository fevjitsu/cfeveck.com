import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper } from "@material-ui/core";
import Contact from "../contact/Contact";
import { hideContact, selectViewContact } from "../contact/contactSlice";
import Lister from "../lists/Lister";
export default function Page({ portfolio, about, contact }) {
  let dispatch = useDispatch();
  let tileData = [
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
    {
      title: "Pet grooming",
      author: "Chris Feveck",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
    },
  ];
  const close = useSelector(selectViewContact);
  if (portfolio) {
    return (
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justify={"center"}
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Lister tileData={tileData} />
        </Grid>
      </Grid>
    );
  }
  if (about) {
    return (
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justify={"center"}
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper elevation={3}>
            Do esse Lorem eiusmod fugiat ea ad ut culpa nostrud pariatur aliqua
            magna consequat. Elit veniam dolore sit aliqua labore ullamco
            excepteur cillum magna ad adipisicing excepteur. Fugiat labore
            reprehenderit enim tempor.
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper elevation={3}>
            Anim aliquip consequat incididunt ut velit officia. Consectetur elit
            aliqua sunt ex laboris enim eiusmod dolor dolore velit labore.
            Laboris incididunt non reprehenderit velit laboris. In duis occaecat
            aute aliquip exercitation nulla. Veniam consequat amet quis ipsum
            nulla laboris fugiat minim id consectetur adipisicing. Deserunt
            dolore et do elit laborum ullamco anim dolore. Veniam mollit cillum
            eu mollit et excepteur aliqua ut nulla eiusmod excepteur.
          </Paper>
        </Grid>
      </Grid>
    );
  }
  if (contact) {
    return (
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justify={"center"}
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper elevation={3}>
            Excepteur magna consequat cillum eiusmod esse quis eiusmod. Mollit
            proident minim do et in ullamco ad consectetur non aliqua do.
            Excepteur Lorem excepteur ea dolore. Eu mollit qui id magna aute
            occaecat do. Proident mollit id enim pariatur dolore aliqua cillum
            commodo magna esse est labore magna.
          </Paper>
        </Grid>
        {close && (
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Contact handleClose={() => dispatch(hideContact())} />
          </Grid>
        )}
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        direction={"row"}
        justify={"center"}
        alignItems={"center"}
        spacing={2}
      >
        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
          <Paper elevation={3}>
            Irure fugiat sit proident ullamco et laboris aute. Enim laboris ea
            laboris velit. Pariatur sit elit Lorem sunt tempor pariatur velit
            officia qui sint enim fugiat pariatur in. Mollit velit proident
            labore duis ex.
          </Paper>
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
          <Paper elevation={3}>
            Irure fugiat sit proident ullamco et laboris aute. Enim laboris ea
            laboris velit. Pariatur sit elit Lorem sunt tempor pariatur velit
            officia qui sint enim fugiat pariatur in. Mollit velit proident
            labore duis ex.
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
