const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

// const admin = require("firebase-admin");

// admin.initializeApp(functions.config().firebase);

// const sgMail = require("@sendgrid/mail");

// const SENDGRID_API = process.env.REACT_APP_SENDGRID_API;
// const TEMPLATE_ID = process.env.REACT_APP_SENDGRID_TEMPLATE_ID;

// sgMail.setApiKey(SENDGRID_API);

// exports.thankyouForSubscribe = functions.firestore
//   .document("portfolioApp/emailList")
//   .onCreate((event) => {
//     const db = admin.firestore();
//     return db.collection("users");
//   });

// const message = {
//     to: email,
//     from: "christopher.feveck@gmail.com",
//     templateId: TEMPLATE_ID,
//     dynamic_template_data: {
//       subject: "Thank you for subscribing!",
//     },
//   };
