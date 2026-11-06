const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const animeRoutes = require("./routes/animeRoutes");
const animePublicRoutes = require("./routes/animePublicRoutes");
const authorRoutes = require("./routes/authorRoutes");
const genreRoutes = require("./routes/genreRoutes");
const typeRoutes = require("./routes/typeRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const { invalidateOnWrite } = require("./utils/cache");
const { rateLimit, AUTH_MAX_REQUESTS } = require("./middleware/rateLimit");

const app = express();

// Required so req.ip is the real client IP when running behind a reverse proxy.
app.set("trust proxy", Number(process.env.TRUST_PROXY_HOPS ?? 1));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["X-Cache", "X-Cache-Expiration", "Retry-After"],
  }),
);

app.get("/", (req, res) =>
  res.json({
    message: "Welcome to Watchlist API",
  }),
);
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api", rateLimit());
app.use(
  ["/api/auth/login", "/api/auth/register"],
  rateLimit({ bucket: "auth", max: AUTH_MAX_REQUESTS }),
);

app.use(express.json());
app.use(invalidateOnWrite);

app.use("/api/auth", authRoutes);
app.use("/api/animes", animePublicRoutes);
app.use("/api/watchlist", animeRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/types", typeRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/users", userRoutes);

app.use((req, res) => res.status(404).json({ error: "Route not found" }));
app.use(errorHandler);

module.exports = app;
