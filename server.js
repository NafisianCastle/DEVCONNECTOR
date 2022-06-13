const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();

app.get("/", (req, res) => res.send("API running successfully"));

//define routes
app.get("/api/users", require("./routes/api/users"));
app.get("/api/profile", require("./routes/api/profile"));
app.get("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
