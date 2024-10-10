const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true, limit: "5mb" }));
app.use(express.json({ extended: true, limit: "5mb" }));

app.use("/api", userRoutes, (req, res) => {
  res.send(`Server is up and running`);
});

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    // pending
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    //fulfilled
  })
  .catch((err) => {
    console.log(err.message);
  }); //rejected'
