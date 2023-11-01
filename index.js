const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('Got All Users') //menampilkan
  })

  app.post('/user', (req, res) => {
    res.send('Got a POST request') //menyimpan atau menambahkan
  })

  app.put('/user/:id', (req, res) => {
    res.send('Got a PUT request at /user') // nyimpan perubahan data dgn id tertentu
  })

  app.delete('/user/:id', (req, res) => {
    res.send('Got a DELETE request at /user') //hapus id user dgn id tertentu
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})