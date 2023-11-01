const express = require('express')
const router = express.Router()

const users = [  //buat data dummy
    {id: 1, nama: "Vincentius", email: "vincent@gmail.com"},
    {id: 2, nama: "Rangga", email: "rangga@gmail.com"},
]
router.get('/users', (req, res) => {
    res.json(users)
  })

  router.post('/user', (req, res) => { //menyimpan atau menambahkan
    users.push(req.body) //menyimpan apa yg ada di body kedalam users
    res.json(users)
  })

  router.put('/user/:id', (req, res) => { // nyimpan perubahan data dgn id tertentu
    const id = req.params.id //menyimpan id yang ada di url
    users.filter(user => {
        if(user.id == id){
            user.nama = req.body.nama
            user.email = req.body.email
            return user
        }
    })
    res.json(users)
  })

  router.delete('/user/:id', (req, res) => {
    res.send('Got a DELETE request at /user') //hapus id user dgn id tertentu
  })

  module.exports = router