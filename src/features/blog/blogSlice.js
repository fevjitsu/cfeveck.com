import { createSlice } from "@reduxjs/toolkit";
import database from "../../firebaseConnection/firebase";
// import { uid } from "uid";
export const blogSlice = createSlice({
  name: "blogger",
  initialState: {
    showBlogs: false,
    isLoading: true,
    blogs: [],
    // blogs: [
    //   {
    //     // id: uid(),
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
    //     // id: uid(),
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
    //     // id: uid(),
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
    //     // id: uid(),
    //     title: "The revamped Lakers.",
    //     body: [
    //       "The start of the NBA (basketball) season starts in just over a month and without shame I tell you I am an 8/10 for excitement.",
    //       "I have always had a 'sus' relationship with sports. Some seasons I have little to no interest in either basketball or football/soccer and other seasons, I stand on the couch's arm rest with hands in the air.",
    //       "This year I am 100% watching the Lakers and possibly the soccer team Paris-Saint Germain as I enjoy Leo Messi. Back to Laker nation though. I'm excited to see superstars of old try to demolish the studs of the league. The NBA narratives are quite the hype builder.",
    //       "I am a Raptors fan as well and yes they #2 to the Lakers in the battle for my support. That aside Spicy P (Pascal Siakam) has had a rough bout with the fans recently. Just in 2019 he was a Robbin to Kawhi's Batman and yet the fans wanted his head for his recent performances. I want Siakam to just demolish his opponents as a finger to the Raptor fans that put him in the trash can. That would be a beautiful Raptor narrative to follow. ",
    //     ],
    //     src: "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Frevampedlakers.png?alt=media&token=8ce22dc6-6f98-4abf-aad8-d0058a144d7c",
    //     alt: "The new memebers of the L.A Lakers roster for 2021/2022 season. The Russell Westbrook saga.",
    //     url: "http://superior-atmosphere.com/",
    //     likes: 0,
    //   },
    // ],
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setShowBlogs: (state, action) => {
      state.showBlogs = action.payload;
    },
    setLikeInc: (state, action) => {
      const blog = state.blogs.find((blog) => {
        return blog.id === action.payload;
      });

      blog.likes = blog.likes + 1;
    },
    setLikeDec: (state) => {
      state.likes = state.likes - 1;
    },
  },
});
export const { setIsLoading, setBlogs, setShowBlogs, setLikeDec, setLikeInc } =
  blogSlice.actions;

export const selectisLoading = (state) => state.blogger.isLoading;
export const selectBlogs = (state) => state.blogger.blogs;
export const selectShowBlogs = (state) => state.blogger.showBlogs;
export const selectLikes = (state) => state.blogger.likes;

export const setBlogsCollectionAsync = () => (dispatch) => {
  let blogs = [];

  database
    .collection(`blogs`)
    .get()
    .then((data) => {
      data.forEach((blog) => {
        blogs.push({ id: blog.id, ...blog.data() });
      });
    })
    .then(() => {
      dispatch(setBlogs(blogs));
    })
    .catch((error) => {
      console(error.message);
    });
};
export const addInitialBlogs = (blogs) => {
  // database.ref("portfolioApp/blogs").update(blogs);
};
export const updateBlogs = (blogs) => (dispatch) => {
  // database.ref("portfolioApp/blogs").update(blogs);
};

// useEffect(() => {
//   let batch = database.batch();
//   if (blogs && blogs.length > 0) {
//     blogs.forEach((blog) => {
//       const docRef = database.collection("blogs").doc();
//       batch.set(docRef, blog);
//     });
//   }
//   batch.commit();
// }, [blogs]);
export default blogSlice.reducer;
