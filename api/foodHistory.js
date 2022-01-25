const router = require('express').Router()
const { FoodHistory } = require('../database/index')

//listen on .../api/food
router.route('/')
.get(async (req, res)=>{ //list all campuses
    try{
        const foodHistory = await FoodHistory.findAll();
        res.send(foodHistory)
    } catch(err){
      res.send(err)
    }
})
.post(async(req, res)=>{ //deal with post request / add 
        console.log(req.body)
        await FoodHistory.create(req.body).then(function(foodHistory){
          res.json(foodHistory)
          console.log('successful created')
        }).catch(err=>{
          res.send(err.message)
        })   

})

router.route("/:id")
.get(async (req, res)=>{
    try{
        const foodHistory = await FoodHistory.findByPk(req.params.id);
        res.send(foodHistory)
    } catch(err){
      res.send(err)
    }
})
.put(async (req,res)=>{
  try{
      const foodHistory = await FoodHistory.findByPk(req.params.id)
      foodHistory.update(req.body)
  } catch(err){
      res.send(err)
  }
})

router.route("/:purchaseId/id")
.get(async (req, res)=>{
    try{
        const foodHistory = await FoodHistory.findAll({where:{purchase_id:req.params.purchaseId, id:req.params.id}});
        res.send(foodHistory)
    } catch(err){
      res.send(err)
    }
})

module.exports = router