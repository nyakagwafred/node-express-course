const express = require('express')
const app = express()
const PORT = 8000
const color = require('colour')
const bodyParser = require('body-parser');

//Body parser middleware
app.use(bodyParser.json());

//Mock JSON Data
const mockUserData=[{name:'Mark'},{name:'Jill'}]

//Test function
const getId = () => {
    return 2 * 4
}

//Logi user
app.post('/login',(req,res)=> {
    const {username, password} = req.body;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

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