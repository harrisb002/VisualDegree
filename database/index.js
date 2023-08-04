const express = require("express");
const colors = require("colors");
const cors = require("cors");
require('dotenv').config({ path: '../.env' })
const { graphqlHTTP } = require("express-graphql");
const schema = require("./server/schema/schema");
const connectDB = require("./server/config/db");
const app = express();

// Connect to the database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

app.listen(process.env.PORT, console.log(`Server running on port ${process.env.DB_PORT}`.cyan));
