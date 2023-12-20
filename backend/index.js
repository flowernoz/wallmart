const express = require("express");
const cors = require("cors");
const { product } = require("./routes/product");
const { user } = require("./routes/user");
const { connect } = require("mongoose");
require("colors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

// Database ga boglanish
connect(process.env.MONGODB_URL)
  .then((res) => console.log("Database ga bog'landi".bgGreen))
  .catch((res) => console.log("Database ga bog'lanmadi".bgRed));

app.get("/", (req, res) => res.send(`<h1>Welcome</h1>`));

// routes
app.use("/product", product);
app.use("/user", user);
app.get("*", (req, res) => {
  res.send(
    `<img src="https://i.pinimg.com/originals/b6/b2/6a/b6b26a5967923abecb1be3c309a373da.png" alt="" />`
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`.bgCyan));
