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
                    url: req.url,
                    message: "success"
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
      store: async (req, res) => { //menyimpan atau menambahkan
        try {
            console.log(req.body)
            const user = await User.create(req.body) //ambil data dari body
            res.status(201).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "data berhasil ditambah"
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({success: false})
        }
      },
      update: async (req, res) => { // nyimpan perubahan data dgn id tertentu
        try{
            const id =  req.params.id //menyimpan id yang ada di url
            await User.filter(user => {
                if(user.id == id){
                    user.nama = req.body.nama
                    user.email = req.body.email
                    return user
                }
            })
            res.status(202).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "data berhasil dirubah"
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({success: false})
        }
      },
      delete: (req, res) => { //hapus id user dgn id tertentu
        const id = req.params.id
        User = User.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: user,
            method: req.method,
            url: req.url,
            message: "data berhasil dihapus"
        })
      }
}