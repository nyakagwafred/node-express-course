const express = require('express')
const app = express()
const PORT = 8000
const color = require('colour')

//Mock JSON Data
const mockUserData=[{name:'Mark'},{name:'Jill'}]

//Get all users
app.get('/users', (req,res) => {
    res.json({success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
         })
    })



app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`.inverse.yellow)
})