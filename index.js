const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const mysqlConnection = require("./connection");
const bodyParser = require('body-parser');


//parse request of content type: application/x-www-form-urlencoded
var urlencoderParser = bodyParser.urlencoded({extended:false});

//parse request of content-type-application-json
app.use(bodyparser.json());

app.listen(4000,()=>console.log('Express server is running at port #: 4000'));

//universities/list
app.get('/universitydetails',(req,res)=>{
    mysqlConnection.query('SELECT * FROM universitydetails',(err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});
//universities/details/UUID
app.get('/universitydetails/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM universitydetails WHERE UniversityUUID = ?',[req.params.id],
    (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});
//universities/delete((when university gets deleted delete colleges under that university))
app.delete('/universitydetails/:id',(req,res)=>{
    mysqlConnection.query('DELETE FROM universitydetails WHERE UniversityUUID = ?',[req.params.id],
    (err, rows, fields)=>{
        if(!err){
            res.send('Deletion completed!');
        }
        else{
            console.log(err);
        }
    })
});
//universities/add 
app.post('/universitydetails/add',urlencoderParser, (req,res)=>{
    console.log(req.body);
    var querySql = mysqlConnection.query("Insert INTO universitydetails Set ?",[req.body],    
    (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});

//college/list
app.get('/collegedetails',(req,res)=>{
    mysqlConnection.query('SELECT * FROM collegedetails',(err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});
//college/details/UUID
app.get('/collegedetails/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM collegedetails WHERE CollegeUUID = ?',[req.params.id],
    (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});
//college/delete
app.delete('/collegedetails/:id',(req,res)=>{
    mysqlConnection.query('DELETE FROM collegedetails WHERE CollegeUUID = ?',[req.params.id],
    (err, rows, fields)=>{
        if(!err){
            res.send('Deletion completed!');
        }
        else{
            console.log(err);
        }
    })
});
//colleges/add
app.post('/collegedetails/add',urlencoderParser, (req,res)=>{
    console.log(req.body);
    mysqlConnection.query("Insert INTO collegedetails Set ?",[req.body],    
    (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});

//colleges/update
app.post('/collegedetails/update/id',urlencoderParser, (req,res)=>{
    console.log(req.body);
    let data = req.body
    mysqlConnection.query("Update collegedetails set Clg_ID=?, CollegeUUID=?, Name=?, Code=? UniversityUUID=? where Clg_ID=?",[data],    
    (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});