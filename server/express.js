const express = require("express");
const cookieParser = require("cookie-parser");
const compress = require("compression");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
// const postRoutes = require("./routes/postRoutes");

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

// Body parsing middleware to handle the complexities of parsing streamable request objects, so we can simplify browser-server communication by exchanging JSON in the request body:
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//Cookie parsing middleware to parse and set cookies in request objects
app.use(cookieParser());

// Compression middleware that will attempt to compress response bodies for all requests that traverse through the middleware
app.use(compress());

//A collection of middleware functions to help secure Express apps by setting various HTTP headers
app.use(helmet());

//Middleware to enable CORS (Cross-origin resource sharing
// app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

// ---------- Routes ------

// ----User Routes---
app.use("/", userRoutes);

// --- Auth Routes ----
app.use("/", authRoutes);

//--- Post Routes ---.
// app.use("/", postRoutes);

module.exports = app;
