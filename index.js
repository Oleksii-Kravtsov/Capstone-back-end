const express = require('express')
const { response } = require('express')
const { options } = require('pg/lib/defaults')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const env = require('dotenv').config()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const { db } = require('./database/index')
const useApi = require('./api')
app.use('/api',useApi)


db.sync().then(() => {
    console.log('database synced')
     app.listen(PORT, () =>
      console.log(`listening on port ${PORT}`)
     )
})  

// //route for the home page
app.get("/", (req, res) => {
    res.send("nothing here")
})


//payment
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)

app.post('/payment', cors(), async (req,res)=>{
    let {amount,id} = req.body
    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            curruncy : 'USD',
            description: "sushi res",
            payment_method : id,
            comfirm : true
        })
        console.log("Payment",payment)
        res.json({
            messege:"Payment Successful",
            success:true
        })
      } catch(err){
         console.log('Error',err)
         res.json({
             messege:'Payment failed',
             success : false
         })
      }
})