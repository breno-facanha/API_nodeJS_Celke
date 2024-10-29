const express = require("express");
const app = express();

const users = require("./controllers/users")

app.use(express.json())

app.use("/", users)

app.listen(8080, () => {
  console.log("servidor rodando na porta 8080");
});
