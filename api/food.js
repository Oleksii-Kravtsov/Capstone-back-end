const router = require('express').Router()
const { Food } = require('../database/Food')

//listen on .../api/food
router.route('/')
.get(async (req, res)=>{ //list all campuses
    try{
        const food = await Food.findAll();
        if (food.length>0){
          res.send(food)
        } else{
          res.send('There are no foods')
        }
    } catch(err){
      res.send(err)
    }
})
.post(async(req, res)=>{ //deal with post request / add campus
        console.log(req.body)

        await Food.create(req.body).then(function(food){
          res.json(food)
          console.log('successful created')
        }).catch(err=>{
          res.send(err.message)
        })   

})

module.exports = router