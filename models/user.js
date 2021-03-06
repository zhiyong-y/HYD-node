let mongoose = require('mongoose');

// 从mongoose中获取Schema表模型
let Schema = mongoose.Schema;

// 定义业务功能模型,字段要文档中的一致
let userSchema = new Schema({
  userId: { type: String, require: true },
  uclass: { type: String, require: true },
  name: { type: String, require: true },
  age: { type: Number, require: true },
  email: { type: String, require: true },
  birthday: { type: Date, require: true },
},{
  collection: 'user'
});

// 导出模型（实体）
module.exports = mongoose.model('User', userSchema);