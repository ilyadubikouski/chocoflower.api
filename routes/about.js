var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const SELECT_ALL_USERS = 'SELECT * FROM users';

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
      
    connection.query(SELECT_ALL_USERS ,(err,results)=>{
        if (err){
            return res.send(err)
        }
        else{
            return res.json({
                data:results
            })
        }
    }) 
    });


//connection.end();
});

module.exports = router;