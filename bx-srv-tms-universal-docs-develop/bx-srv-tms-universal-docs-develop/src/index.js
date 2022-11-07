//imports
const express = require("express");
require("dotenv").config();
const routes = require("./routes");
// const cors = require("cors");

//.env config loads

//express setup
const app = express();
const port = process.env.PORT || 3000;
// app.use(cors());
app.use(express.json());

app.use(routes);

//express run
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
