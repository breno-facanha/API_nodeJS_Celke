const express = require('express')

const router = express.Router()

router.get("/users", (req, res) => {
    res.send('Listar Usuários')
})

router.get("/users/:id", (req, res) => {
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

router.post("/users", (req, res) => {
    let { name, email } = req.body
   
    return res.json({
        name: name,
        email: email
      })
})

router.delete("/users/:id", (req, res) => {
    let id = req.params.id
    res.send(`id: ${id} deletado com sucesso`)
  })

module.exports = router