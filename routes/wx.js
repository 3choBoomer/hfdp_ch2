var express = require('express');
var router = express.Router();

var wx = require("../lib/weatherData");

/* GET home page. */
router.get('/', function(req, res, next) {
  if (Object.keys(wx.data).length > 0){
    res.status(200).json(wx.data);
  } else {
    res.status(404).send();
  }
});

router.get('/:wxItem', function(req, res, next){
  if (wx.data[req.params.wxItem]){
    res.status(200).json(wx.data[req.params.wxItem]);
  } else {
    res.status(404).send();
  }
});

router.post('/:wxItem/:wxValue', function(req, res, next) {
  wx.data[req.params.wxItem] = req.params.wxValue;
  wx.notifyObservers();
  res.status(200).json(req.params.wxItem);
});

module.exports = router;
