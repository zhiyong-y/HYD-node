var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
  var data = {
    result: 1,
    data: [
      {
        "name": "bottle",
        "id": "100102",
        "size": "5",
        "color": "red",
        "price": "49"
      }
    ],
    totalNum: 1
  }
  res.json(data);   // 注意：返回json
});

module.exports = router;