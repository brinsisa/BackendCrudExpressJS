var express = require('express');
var router = express.Router();
var db=require('../models');
/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */



router.post('/add',(req,res)=>{
db.avis_model.create(req.body).then((response)=>{
  res.status(201).send(response)}).catch((err)=>{
res.status(400).send(err)
})
});

router.put('/update/:id',(req,res)=>{
  db.avis_model.update(req.body,{where:{id_avis:req.params.id}}).then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
  res.status(400).send(err)
  })
  
  
  });

  router.delete('/remove/:id',(req,res)=>{
    db.avis_model.destroy({where:{id_avis:req.params.id}}).then((response)=>{
      res.send("removed")}).catch((err)=>{
    res.status(400).send(err)
    })
  });
  router.get('/avi/:id',(req,res)=>{
    db.avis_model.findOne({where:{id_avis:req.params.id}}).then((response)=>{
      res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
    
    
    });

    router.get('/',(req,res)=>{
      db.avis_model.findAll().then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
      res.status(400).send(err)
      })
      
      
      });

module.exports = router;
