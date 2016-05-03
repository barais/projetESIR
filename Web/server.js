
// ---------------Environnement-----------------
var mysql = require('node-mysql');
var DB = mysql.DB;
var url = require('url');
var app = require('express')();
var server = require('http').Server(app);
var path = require('path');


// ------------express-------------------
app.set('views', path.join(__dirname, '.'));
app.set('view engine', 'ejs');
app.use(require('express').static(path.join(__dirname, './assets')));
server.listen(3000);

var io=require('socket.io').listen(server);


var db =  new DB({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'Projet_esir',
    connectionLimit: 50,
    useTransaction: {
        connectionLimit: 1
    }
});
// -----------------index-----------------
app.get('/index', function(req, res) {
    res.render('index');
});

app.get('/', function(req, res) {
 res.render('index');
});
app.get('/login', function(req, res) {
res.render('login');
});

app.get('/stream', function(req, res) {
res.render('streams');
});
   
app.get('/createaccount', function(req, res) {
res.render('createaccount');
   
});



	 // L'utilisateur va créer un compte
io.sockets.on('connection', function(socket){

	socket.on('createaccount',function(user){
	console.log("je suis la ");
	var basicTest = function(cb) {
    db.connect(function(conn, cb) {
        cps.seq([
            function(_, cb) {
                conn.query('select * from  login_web', cb);

            },
            function(res, cb) {
                console.log(res);
                cb();
            }
        ], cb);
    }, cb);
};
 });

	// 
	// 

	// var post = {
	// 	nom:user.firstname,
	// 	prenom:user.secondname,
	// 	identifiant:user.identifiant,
	// 	mdp:user.mdp,
	// 	email:user.email
	// 	};
 // 		db.query('INSERT INTO login_web VALUES ?', post, function(error) {
 //        if (error) {
 //            console.log(error.message);
 //        } else {
 //            console.log('success');    
 //        }
 //    });

	// });

socket.on('login',function(user){
	console.log("je suis dans login ");
});

});


// app.get("/user/create", function(req, res) {
//     console.log("je suis la ");
//         var objBD = BD();

//     var post = {
//      nom: req.body.nom,
// 		prenom: req.body.prenom,
// 		identifiant:req.body.id,
// 		mdp:req.body.mdp,
// 		email: req.body.email
//     };

//     objBD.query('INSERT INTO login_web VALUES ?', post, function(error) {
//         if (error) {
//             console.log(error.message);
//         } else {
//             console.log('success');    
//         }
//     });
// });



