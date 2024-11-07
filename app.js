const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 3000;

app.use(morgan("tiny"));

app.get("/test", (req, res) => {
  res.send({ message: "success" });
});

app.get("/add", (req, res) => {
  const query = req.query;
  // query string - http://localhost:3000/add?num1=10&num2=5
  res.send({
    data: `the sum of the numbers: ${
      parseInt(query.num1) + parseInt(query.num2)
    }`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
