/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// auth trigger :: new user signup
exports.newUserSignup = functions.auth.user().onCreate((user) => {
  // background triggers should return a value/promise
  return admin.firestore().collection("users").doc(user.uid).set({
    email: user.email,
    upvotedOn: [],
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  });
});

// auth trigger :: user deleted
exports.deleteUser = functions.auth.user().onDelete((user) => {
  // firebase console
  console.log("user deleted", user.email, user.uid);
  // background triggers should return a value/promise
  const doc = admin.firestore().collection("users").doc(user.uid);
  return doc.delete();
});

exports.upvote = functions.https.onCall((data, context) => {
  // context contains useful data about the request (default)
  // determins if user is authenticated or not
  if (!context.auth) {
    // to throw a firebase error
    // httpserror  method has options used in the 1st param
    // the second contains a personal message
    throw new functions.https.HttpsError(
      "unauthenticated",
      "only authenticated user can add"
    );
  }

  // get refs for request and user
  const user = admin.firestore().collection("users").doc(context.auth.uid);
  const blog = admin.firestore().collection("blogs").doc(data.id);
  return user.get().then((doc) => {
    // check if the user has upvoted
    if (doc.data().upvotedOn.includes(data.id)) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "you can only vote once"
      );
    }
    return user
      .update({ upvotedOn: [...doc.data().upvotedOn, data.id] })
      .then(() => {
        // update vote on request
        blog.update({ likes: admin.firestore.FieldValue.increment(1) });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
