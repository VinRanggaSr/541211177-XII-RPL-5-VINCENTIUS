const User = require('../models/User')

module.exports = {
    index: async(req, res) => {
        try {
            const users = await User.find()
            if(users.length > 0){ //kondisi jika ada data
                res.status(200).json({
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
        } catch (error) {
            res.status(400).json({sucess: false})
        }
        
      },
      store: (req, res) => { //menyimpan atau menambahkan
        users.push(req.body) //menyimpan apa yg ada di body kedalam users
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "data berhasil ditambah"
        })
      },
      update: (req, res) => { // nyimpan perubahan data dgn id tertentu
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
      },
      delete: (req, res) => { //hapus id user dgn id tertentu
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "data berhasil dihapus"
        })
      }
}