let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let menuSchema = new Schema({
  rightCode: { type: String, require: true },
  rightName: { type: String, require: true },
  rightUrl: { type: String },
  rightIcon: { type: String },
  orderNo: { type: Number },
  subMenu: { type: Array }
}, {
  collection: 'sys_right_item'
});

// 导出模型（实体）
module.exports = mongoose.model('Menu', menuSchema);