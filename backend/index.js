const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");

require("dotenv").config();

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(morgan("common"));

require("./utils/db")();

app.use(
  session({
    name: "codewithmama.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
    }),
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60*24,
      sameSite: "lax",
    },
  })
);

// Middleware to log cookies
app.use((req, res, next) => {
  // console.log("Cookies: ", req.cookies);
  // console.log("Session: ", req.session);
  next();
});

// Test route to set a session value
app.get("/test-session", (req, res) => {
  req.session.test = "Session is working!";
  // console.log("test",  req.session.user);
  res.send( req.session.user);
});

// Route to check session value
app.get("/check-session", (req, res) => {
  res.send(req.session.test || "No session value set");
});


require("./routes/AllRoutes")(app);

app.listen(8000, () => console.log(`server started...`));
