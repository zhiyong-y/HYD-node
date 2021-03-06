var express = require('express');
var router = express.Router();

let Menu = require('../models/menu');

const queryMenu = (req, res, next) => {
  return new Promise((resolve, reject) => {
    // 后期加入权限后，需要根据角色过滤菜单数据
    Menu.find({ "upperRightCode": { $eq: null } }, function (err, doc) {
      if (err) {
        reject(err);
      } else {
        resolve(doc);
      }
    }).sort({orderNo: 1}); 
    // 根据字段排序；1为正序，-1为倒序
  })
}
const querySubMenu = (upperRightCode) => {
  return new Promise((resolve, reject) => {
    Menu.find({ "upperRightCode": { $eq: upperRightCode } }, function (err, doc) {
      if (err) {
        reject(err);
      } else {
        resolve(doc);
      }
    });
  })
}

router.post('/', function (req, res, next) {
  // 获取请求参数
  let params = "";
  req.on("data", (dt) => {
    params += dt;
  });
  req.on("end", () => {
    console.log(params);
  });
  queryMenu(req, res, next).then(result => {
     result.forEach(item => {
      querySubMenu(item.rightCode).then(sub => {
        item.subMenu = sub;
      }).catch(error => {
        console.log(error);
      })
    });
    setTimeout(() => {
      // ?????这块不知道咋解决
      res.json({
        status: '0',
        msg: '',
        result: {
          count: result.length,
          list: result
        }
      })
    }, 300);
  }).catch(error => {
    res.json({
      status: '1',
      msg: error.message
    })
  });
});

module.exports = router;