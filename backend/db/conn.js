const mongoose = require("mongoose");

const DB =
  "mongodb+srv://fdmonteza:monteza09@cluster0.0inpzzp.mongodb.net/db_bookclubmanagement_monteza?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
