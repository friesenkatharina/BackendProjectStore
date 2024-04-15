import "./db.connect.js";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";

const port = process.env.PORT || 3000;
const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    console.log("origin:", origin);
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/", usersRoutes);

// Middleware to log the method and path of each request, and the body of POST requests
app.use((req, res, next) => {
  console.log(`current request infos: ${req.method}  ${req.path}`);
  if (req.method !== "GET") {
    console.log(`req.body: ${JSON.stringify(req.body)}`);
  }

  next();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} \n`);
});
