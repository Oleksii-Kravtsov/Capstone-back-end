const express = require('express')
const { response } = require('express')
const { options } = require('pg/lib/defaults')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(cors())
app.listen(port, () => console.log(`the app is listening on port ${port}!`))

const {Sequelize, Op, Model, DataTypes} = require('sequelize')

//parameters for sequelize to connect to database
const sequelize = new Sequelize('postgres://mlmfhixyvxdbfb:8d015980b6924a607ac5e728f7464cd428cf030b186a495789f7e06cbced16ce@ec2-50-17-255-120.compute-1.amazonaws.com:5432/d1lek14n0cl2vc')

//checks if the sequelize was connected to the database
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully!!!');
}).catch((err)=>{
    console.log('Unable to connect to the database:', err);
})


sequelize.sync()

//route for the home page
app.get("/", (req, res) => {
    res.send("nothing here")
})



