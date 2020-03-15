const mysql = require("mysql2");
const con = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'rtlry',
    database: 'bdd_web'
  });

const express = require('express');

const app = express();


app.get('/users', function(req, res) {
    con.query('SELECT * FROM `user`', function(err, rows, fields) {
        if (err) throw err;
          for (let i = 0; i < rows.length; i++) {
            result = rows;
          };
          res.json(result);    
        });
});

app.get('/users/:id', function(req, res) {
    const id = req.params.id;
    con.query('SELECT * FROM user where id = ?', [id], function(err, row, fields) {
        if (err) throw err;
        res.json(row);
        });
});

app.listen(3000, function() {
console.log('Express app - listening on port 3000!');
});


  
  