const { response } = require('express');
var express = require('express');
var router = express.Router();
var db=require('../models');
/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */



router.post('/add',(req,res)=>{
db.newcommentaire_model.create(req.body).then((response)=>{
  res.status(201).send(response)}).catch((err)=>{
res.status(400).send(err)
})

});
router.put('/update/:id',(req,res)=>{
    db.newcommentaire_model.update(req.body,{where:{id_newcommentaire:req.params.id}}).then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
            res.status(400).send(err)
        })
});


  router.delete('/remove/:id',(req,res)=>{
    db.newcommentaire_model.destroy({where:{id_newcommentaire:req.params.id}}).then((response)=>{
      res.send("removed")}).catch((err)=>{
    res.status(400).send(err)
    })
  });
  router.get('/reponse/:id',(req,res)=>{
    db.newcommentaire_model.findOne({where:{id_newcommentaire: req.params.id}}).then((response)=>{
      res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
    
    
    });

    router.get('/',(req,res)=>{
      db.newcommentaire_model.findAll({include: [{model: db.commentaire_model, as :'id_commentaire'}]}).then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
      res.status(400).send(err)
      })
      });

module.exports = router;
