const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

//serve static images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Handle image upload
app.post("/upload", upload.single("image"), (req, res) => {
  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

app.listen(PORT, () => {
  console.log(`CDN network is running on PORT: ${PORT}`);
});
