var express = require('express');
var router = express.Router();

var observerManager = require('../lib/observerManager');

router.post('/:obsName', function(req, res, next) {
  console.log(req.params);
  if (observerManager.add(req.params.obsName)){
    res.status(200).send('OK');
  } else {
    res.status(404).send('observer is not present on the server');
  }
});

router.delete('/:obsName', function(req, res, next){
  observerManager.remove(req.params.obsName);
  res.status(200).json('OK');
});

module.exports = router;
