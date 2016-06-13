var express = require('express');
var httpServer = express();

httpServer.use(express.static(__dirname));

httpServer.listen(3000);