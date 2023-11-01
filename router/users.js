const express = require('express')
const router = express.Router()

let users = [  //buat data dummy
    {id: 1, nama: "Vincentius", email: "vincent@gmail.com"},
    {id: 2, nama: "Rangga", email: "rangga@gmail.com"},
]
router.get('/users', (req, res) => {
    if(users.length > 0){ //kondisi jika ada data
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
        })
    }else{
        res.json({
            status: false,
            message: "data masih kosong"
        })
    }
  })

  router.post('/user', (req, res) => { //menyimpan atau menambahkan
    users.push(req.body) //menyimpan apa yg ada di body kedalam users
    res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "data berhasil ditambah"
    })
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
    res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "data berhasil dirubah"
    })
  })

  router.delete('/user/:id', (req, res) => { //hapus id user dgn id tertentu
    const id = req.params.id
    users = users.filter(user => user.id != id)

    res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "data berhasil dihapus"
    })
  })

  module.exports = router