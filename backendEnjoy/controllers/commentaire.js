const { response } = require('express');
var express = require('express');
var router = express.Router();
var db=require('../models');

const { newcommentaire_model} = require('../models');
/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

// get all commentsByVoyageAndMembre
/* router.get('/commentsreponse', (req, res) => {
  // find all comments
  // be sure to include its associated Voyage and Membre data
  db.commentaire_model.findAll({
    include: [
      {
        model: newcommentaire_model,
        attributes: ['id_newcommentaire', 'contenu']
      }
    ]
  })
  .then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
  res.status(400).send(err)
  });
}); */



router.post('/add',(req,res)=>{
db.commentaire_model.create(req.body).then((response)=>{
  res.status(201).send(response)}).catch((err)=>{
res.status(400).send(err)
})

});
router.put('/update/:id',(req,res)=>{
  db.commentaire_model.update(req.body,{where:{id_commentaire:req.params.id}}).then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
      res.status(400).send(err)
    })
});


  router.delete('/remove/:id',(req,res)=>{
    db.commentaire_model.destroy({where:{id_commentaire:req.params.id}}).then((response)=>{
      res.send("removed")}).catch((err)=>{
    res.status(400).send(err)
    })
  });
  router.get('/comment/:id',(req,res)=>{
    db.commentaire_model.findOne({where:{id_commentaire: req.params.id}}).then((response)=>{
      res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
    
    
    });

    router.get('/',(req,res)=>{
      db.commentaire_model.findAll( {include: [{model: db.newcommentaire_model, as :'id_commentaire'}]}).then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
      res.status(400).send(err)
      })
      
      
      });

module.exports = router;
