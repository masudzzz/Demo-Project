const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("others"));

// Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/others/index.html");
});

// Contact form submit
app.post("/contact", (req, res) => {
  const data = req.body;

  console.log("New Contact Request:", data);

  let oldData = [];
  if (fs.existsSync("data.json")) {
    oldData = JSON.parse(fs.readFileSync("data.json"));
  }

  oldData.push(data);

  fs.writeFileSync("data.json", JSON.stringify(oldData, null, 2));

  res.send("Thanks! I will contact you soon.");
});

app.listen(3000, () => {
  console.log("Personal website running on port 3000");
});