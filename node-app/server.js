var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var redis = require("redis");
var bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var client = redis.createClient(6379, 'redis', { auth_pass: 'password' })
var router = express.Router();
var server = http.createServer(app);

app.use('/node', router);
app.use(bodyParser.json());

router.get('/stuff', (req, res) => {

    client.getAsync('count').then(function (count) {
        let c = parseInt(count) || 0;
        c++;
        client.setAsync('count', c).then(() => {
            res.json({ hello: 'world', count: c });
        }).catch(function (err) {
            res.json({
                error: err,
                message: 'Failed to set in redis'
            })
        })
    }).catch(function (err) {
        res.json({
            error: err,
            message: 'Failed to get from redis'
        })
    })

});

server.listen(3000, () => {
    console.log('server started ...');
});