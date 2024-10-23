const express = require("express");
const app = express();


app.use(express.json())

app.get("/", (req, res) => {
  res.send("Listar usuários!");
});

app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  let name = req.query.name
  let email = req.query.email
  return res.json({
    id: id,
    name: name,
    email: email
  })
//   res.send(`Vizualizar id: ${id}`);
});

app.post("/users", (req, res) => {
    let { name, email } = req.body
   
    return res.json({
        name: name,
        email: email
      })
})

app.delete("/users/:id", (req, res) => {
  let id = req.params.id
  res.send(`id: ${id} deletado com sucesso`)
})

app.listen(8080, () => {
  console.log("servidor rodando na porta 8080");
});
