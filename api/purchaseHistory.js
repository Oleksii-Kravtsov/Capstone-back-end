const router = require('express').Router()
const { PusrchaseHistory } = require('../database/index')

//listen on .../api/food
router.route('/')
.get(async (req, res)=>{ //list all campuses
    try{
        const purchaseHistory = await PusrchaseHistory.findAll();
        res.send(purchaseHistory)
    } catch(err){
      res.send(err)
    }
})
.post(async(req, res)=>{ //deal with post request / add 
        console.log(req.body)
        await PusrchaseHistory.create(req.body).then(function(purchaseHistory){
          res.json(purchaseHistory)
          console.log('successful created')
        }).catch(err=>{
          res.send(err.message)
        })   

})

router.route("/:id")
.get(async (req, res)=>{
    try{
      const purchaseHistory = await PusrchaseHistory.findAll({where:{userId:req.params.id}});
      res.send(purchaseHistory)
    } catch(err){
      res.send(err)
    }
})
.put(async (req,res)=>{
  try{
      const purchaseHistory = await PusrchaseHistory.findByPk(req.params.id)
      purchaseHistory.update(req.body)
  } catch(err){
      res.send(err)
  }
})

module.exports = router