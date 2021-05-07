const express = require('express')
const app = express()
const PORT = 8000
const color = require('colour')

//Mock JSON Data
const mockUserData=[{name:'Mark'},{name:'Jill'}]

//Test function
const getId = () => {
    return 2 * 4
}

//Get all users
app.get('/users:id', (req,res) => {
    res.json({success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData,
         })
})
  
//Get one user
app.get('/users/:id', (req, res)=> {
    console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`.inverse.yellow)
})