const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    res.send('Got All Users') //menampilkan
  })

  router.post('/user', (req, res) => {
    res.send('Got a POST request') //menyimpan atau menambahkan
  })

  router.put('/user/:id', (req, res) => {
    res.send('Got a PUT request at /user') // nyimpan perubahan data dgn id tertentu
  })

  router.delete('/user/:id', (req, res) => {
    res.send('Got a DELETE request at /user') //hapus id user dgn id tertentu
  })

  module.exports = router