const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//cookie parser middlware
app.use(cookieParser());

//fileUpload middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Importing routes
const home = require("./routes/homeRoutes");
const user = require("./routes/userRoutes");
//Using routes
app.use("/api/v1", home);
app.use("/api/v1", user);

//This is the last middleware. whenever the next keyword is called with an error then this is where it will come for processing.
app.use((err, req, res, next) => {
  console.log(err);

  //Handling errors
  if (err.name === "MongoServerError") {
    if (err.code === 11000) {
      err.code = 400;
      err.message = "User with this email or phone number already exists";
    }
    err.code = 500;
  }
  if (err.name === "ValidationError") {
    err.code = 400;
  }
  if (!err.code) {
    err.code = 500;
  }

  //Showing errors
  res.status(err.code).json({
    name: err.name,
    msg: err.message,
    code: err.code,
  });
});
module.exports = app;