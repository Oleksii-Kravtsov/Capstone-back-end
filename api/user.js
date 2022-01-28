const router = require('express').Router()
const { User } = require('../database/index')

//listen on .../api/food
router.route('/')
.get(async (req, res)=>{ //list all campuses
    try{
        const user = await User.findAll();
        res.send(user)
    } catch(err){
      res.send(err)
    }
})
.post(async(req, res)=>{ //deal with post request / add 
        console.log(req.body)
        await User.create(req.body).then(function(foodHistory){
          res.json(foodHistory)
          console.log('successful created')
        }).catch(err=>{
          res.send(err.message)
        })   

})

router.route("/:id")
.get(async (req, res)=>{
    try{
        const user = await User.findByPk(req.params.id);
        res.send(user)
    } catch(err){
      res.send(err)
    }
})
.put(async (req,res)=>{
  try{
      const user = await User.findByPk(req.params.id)
      user.update(req.body)
  } catch(err){
      res.send(err)
  }
})

module.exports = router