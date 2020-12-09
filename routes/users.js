var express = require('express');
var router = express.Router();

// 引入mongoose以及业务实体
// let mongoose = require('mongoose');
let test = require('../models/user');

router.get('/lists', function (req, res, next) {
  console.info(test)
  test.find(function (err, doc) {
    console.log(doc)
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
});

module.exports = router;
