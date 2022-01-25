const router = require('express').Router()
const { User } = require('../database/User')

//listen on .../api/user
router.route('/')
.get(async (req, res)=>{ //list all campuses
    try{
        const user = await User.findAll();
        if (user.length>0){
          res.send(user)
        } else{
          res.send('no customer')
        }
    } catch(err){
      res.send(err)
    }
})
.post(async(req, res)=>{ //deal with post request / add campus
        console.log(req.body)

        await User.create(req.body).then(function(user){
          res.json(user)
          console.log('successful created')
        }).catch(err=>{
          res.send(err.message)
        })   

})

module.exports = router