// 用于连接mongodb
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/list', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {}) //连接到mongoDB
//该地址格式：mongodb://[username:password@]host:port/database[?options]
//默认port为27017 

// 获取链接，监听
let db = mongoose.connection;
db.on('error', () => {
  console.log('Connection error');
});
db.once('open', () => {
  console.log('db connected');
});

module.exports = mongoose;