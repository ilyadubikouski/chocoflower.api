var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const INSERT_USERS_QUERY = 'INSERT INTO users (name, email) VALUES("timur","timur@bnm.ch")';

router.get('/', function(req, res, next) {
    var connection = mysql.createConnection({
      host     : 'database-1.cmubdpqunibw.us-east-1.rds.amazonaws.com',
      user     : 'admin',
      password : 'password',
      database : 'chocoflowerdb',
      port     : 3306
    });

    connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }
      console.log('Connected to database.');
      
    connection.query(INSERT_USERS_QUERY ,(err)=>{
        if (err){
            return res.send(err)
        }
        else{
          return res.send('adding user');
        }
    }) 
    });

//connection.end();
});
module.exports = router;
