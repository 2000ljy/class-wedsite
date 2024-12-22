const express = require('express');
onst app = express();
onst port = 3000;
// 允许跨域访问
pp.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   next();
);
// 提供静态文件访问
pp.use(express.static('./'));
// 启动服务器
pp.listen(port, '0.0.0.0', () => {
   console.log(`服务器运行在 http://localhost:${port}`);
   console.log(`请用手机访问 http://192.168.1.9:${port}`);
);