import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebaseConnection/firebase";
export const emailSlice = createSlice({
  name: "email",
  initialState: {
    emailID: null,
    emailList: [],
  },
  reducers: {
    setEmailID: (state, action) => {
      state.emailID = action.payload;
    },
    setEmailList: (state, action) => {
      state.emailList = action.payload;
    },
    unsub: (state, action) => {
      state.emailList.filter((email) => email !== action.payload);
    },
  },
});
export const selectEmails = (state) => state.email.emailList;

export const { setEmailList, setEmailID, unsub } = emailSlice.actions;

export const setEmailListAsync = (target) => (dispatch) => {
  let emailCollection = [];
  db.collection(target)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        emailCollection.push({ id: doc.id, email: doc.data() });
      });
      dispatch(setEmailList(emailCollection));
    })

    .catch((e) => {
      console.log("error fetching");
    });
};

export const removeEmailAsync = (target, email) => (dispatch) => {
  db.collection(target)
    .where("email", "==", `${email}`)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        db.collection(target).doc(doc.id).delete();
      });
    });
};
export default emailSlice.reducer;
