const express = require('express');
const db = require('./helpers/projectModel');

const router = express.Router();

//---------------------------------------------------------
// Get Requests
//---------------------------------------------------------
router.get('/', (req, res) => {
    db.get()
    .then(dbs => {
      res.status(200).json(dbs);
    })
    .catch(err => res.status(500).json(err));
  });
  
  router.get('/:id', (req, res) => {
    db.get(req.params.id)
    .then(dbs => {
        res.status(200).json(dbs);
    })
    .catch(err => res.status(500).json(err));
  });

  router.get('/actions/:id', (req, res) => {
    db.getProjectActions(req.params.id)
    .then(dbs => {
        res.status(200).json(dbs);
    })
    .catch(err => res.status(500).json(err));
  });

//---------------------------------------------------------
// Post Requests
//---------------------------------------------------------
  router.post('/', (req, res) => {
    db.insert(req.body)
      .then(proj => {
        res.status(201).json(proj);
      })
      .catch(err => res.status(500).json(err));
  });

//---------------------------------------------------------
// PUT Requests
//---------------------------------------------------------
router.put('/:id', (req, res) => {
  db.update(req.params.id, req.body)
  .then(proj => {
      res.status(200).json(proj);
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