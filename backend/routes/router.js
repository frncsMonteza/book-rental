const express = require("express");
const router = express.Router();
const tbl_book = require("../models/bookSchema");
// router.get("/", (req, res) => {
//   console.log("connect");
// });

router.post("/register", async (req, res) => {
  //   console.log(req.body);
  const { name, email, age, mobile, work, address, desc } = req.body;

  if (!name || !email || !age || !mobile || !work || !address || !desc) {
    res.status(404).send("Please fill the data");
  }

  try {
    const prebook = await tbl_book.findOne({ email: email });
    console.log(prebook);

    if (prebook) {
      res.status(404).send("This book is already in the database");
    } else {
      const addBooks = new tbl_book({
        name,
        email,
        age,
        mobile,
        work,
        address,
        desc,
      });

      await addBooks.save();
      res.status(201).json(addBooks);
      console.log(addBooks);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
