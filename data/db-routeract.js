const express = require('express');
const db = require('./helpers/actionModel');
const dbProj = require('./helpers/projectModel');

const router = express.Router();

//---------------------------------------------------------
// Get Requests
//---------------------------------------------------------
router.get('/', (req, res) => {
        db.get()
        .then(dbs => {
          res.status(200).json(dbs);
        })
        .catch(error => {
          res.status(500).json({success: false, error: "The post information could not be retrieved." });
        });
      });
    
      router.get('/:id', (req, res) => {
        db.get(req.params.id)
        .then(dbs => {
            res.status(200).json(dbs);
        })
        .catch(error => {
          res.status(500).json({success: false, error: "The post information could not be retrieved." });
        });
      });

//---------------------------------------------------------
// Post Requests
//---------------------------------------------------------
router.post('/', (req, res) => {
    dbProj.get(req.body.project_id)
        .then(proj => {
            if(proj != null)
            {
                db.insert(req.body)    
                .then(proj => {
                res.status(201).json(proj);
                })
                .catch(err => res.status(500).json(err))
            }
            else {
                res.status(404).json({message: 'Project ID was not found'})
            }
        })
        .catch(err => res.status(500).json(err));
        });

//---------------------------------------------------------
// PUT Requests
//---------------------------------------------------------
router.put('/:id', (req, res) => {
    dbProj.get(req.body.project_id)
        .then(proj => {
            if(proj != null)
            {
                db.update(req.params.id, req.body)    
                .then(act => {
                res.status(201).json(act);
                })
                .catch(err => res.status(500).json(err))
            }
            else {
                res.status(404).json({message: 'Project ID was not found'})
            }
        })
        .catch(err => res.status(500).json(err));
        });

//---------------------------------------------------------
// DELETE Requests
//---------------------------------------------------------
router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(count => {
        res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err));
    });

module.exports = router;