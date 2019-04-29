const express = require('express')
const app = express()
const port = 3000
const $ = require('jquery')
var mysql = require('mysql');
const url = require('url');

app.use(express.static(__dirname));

app.get('/getPosts', function(req, res) {
    
    var pool = mysql.createPool({
        connectionLimit: 10,
        timeout: 60 * 60 * 1000,
        host: 'localhost',
        user: 'sa',
        password: 'pass',
        database: 'asoykan'
    })
    
    pool.query('SELECT * FROM posts order by post_date desc', function (err, result, fields) {
        if (err) throw new Error(err)
        var data= JSON.stringify(result)
        res.send(data);
    })

})
app.get('/getAllPosts', function(req, res) {
    
    var pool2 = mysql.createPool({
        connectionLimit: 10,
        timeout: 60 * 60 * 1000,
        host: 'localhost',
        user: 'sa',
        password: 'pass',
        database: 'asoykan'
    })
    
    pool2.query('SELECT * FROM posts order by post_date desc', function (err, result, fields) {
        if (err) throw new Error(err)
        var data= JSON.stringify(result)
        res.send(data);
    })

})

app.get('/getPosts/:title', function(req, res){
    var pool = mysql.createPool({
        connectionLimit: 10,
        timeout: 60 * 60 * 1000,
        host: '185.106.211.51',
        user: 'asoyk_sa',
        password: 'boy1whoSquat',
        database: 'asoykan'
    })
    
    pool.query('SELECT * FROM posts where post_title=?', [req.params.title], function (err, result, fields) {
        if (err) throw new Error(err)
        var data= JSON.stringify(result)
        res.send(data);
    })
})


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
})

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/src/about.html');
})

app.get('/posts', function(req, res) {
    res.sendFile(__dirname + '/src/post.html');
})

app.get('/list', function(req, res) {
    res.sendFile(__dirname + '/src/list.html');
})

app.listen(port, function() {
    console.log(`App is listening on port ${port}`)
})


