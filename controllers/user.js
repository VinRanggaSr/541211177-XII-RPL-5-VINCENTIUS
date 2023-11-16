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
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new : true,
                runValidators : true
            }) //menyimpan id yang ada di url yang diisi data bpdy
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
      delete: async (req, res) => { //hapus id user dgn id tertentu
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "data berhasil dihapus"
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({success: false})
        }
      }
}