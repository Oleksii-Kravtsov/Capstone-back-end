const router = require('express').Router()
const { Food } = require('../database/index')

//listen on .../api/food
router.route('/')
.get(async (req, res)=>{ //list all campuses
    try{
        const food = await Food.findAll();
        res.send(food)
    } catch(err){
      res.send(err)
    }
})
.post(async(req, res)=>{ //deal with post request / add 
        console.log(req.body)

        await Food.create(req.body).then(function(food){
          res.json(food)
          console.log('successful created')
        }).catch(err=>{
          res.send(err.message)
        })   

})

router.route("/:type")
.get(async (req, res)=>{
    try{
        if (!Number(req.params.type)){
            const food = await Food.findAll({where:{type:req.params.type}});
            res.send(food)
        } else{
            const food = await Food.findByPk(req.params.type);
            res.send(food)
        }
    } catch(err){
      res.send(err)
    }
})
.delete( async (req,res)=>{
    try{
        const food = await Food.findByPk(req.params.type)
        await food.destroy()
    } catch(err){
        res.send(err)
    }
})
.put(async (req,res)=>{
    try{
        const food = await Food.findByPk(req.params.type)
        food.update(req.body)
    } catch(err){
        res.send(err)
    }
})

module.exports = router