/**
 * Created by Kathy on 2017/1/18.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var userList = [{
    "bookName": "angular",
    "bookPrice": 99,
    "bookCover": "img/book.jpg",
    "id": 1
}];
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
app.get('/books', function (req, res) {
    res.send(userList);
});
app.get('/books/:bid', function (req, res) {
    var data = userList.find(function (item) {
        return item.id == req.params.bid;
    });
    res.send(data);
});
app.post('/books', function (req, res) {
    var data1 = req.body;
    data1.id = userList.length ? userList[userList.length - 1].id + 1 : 1;
    userList.push(data1);
    res.send(data1);
});
app.put('/books/:bid', function (req, res) {
    userList = userList.map(function (item) {
        console.log(item);
        if (item.id == req.params.bid) {
            return req.body;
        } else {
            return item;
        }
    });
    res.send(req.body);
});
app.delete('/books/:bid', function (req, res) {
    userList = userList.filter(function (item) {
        return item.id != req.params.bid;
    });
    res.send({});
});
app.listen(80);