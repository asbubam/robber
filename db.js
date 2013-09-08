var mongo = require('mongodb');

var Server = mongo.Server,
		Db = mongo.Db,
		Bson = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('robber', server, {safe: true});

exports.init = function() {
	db.open(function(err, db) {
		if(!err) {
			console.log('connected to robber db');
			db.collection('users', {strict:true}, function(err, collection) {
				if(err) {
					console.log("The 'users' collection doesn't exist. populateDB()");
					populateDB();
				}
			});
		}
	});
};

function populateDB() {
	var users = [
		{
			username: "test",
			pw: "1234",
			points: 1000,
			rob_count: 0,
			robbed_count: 0,
			logged: 'N',
			hide: 'N',
			user_image: 'http://casaofgila.files.wordpress.com/2011/07/qa-guy.jpg',
			auth_key: null
		},
		{
			username: "alice",
			pw: "1234",
			points: 1000,
			rob_count: 0,
			robbed_count: 0,
			logged: 'N',
			hide: 'N',
			user_image: 'http://cfile22.uf.tistory.com/image/1461BC114B115EBA046288',
			auth_key: null
		},
		{
			username: "tony",
			pw: "1234",
			points: 1000,
			rob_count: 0,
			robbed_count: 0,
			logged: 'N',
			hide: 'N',
			user_image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNWTYSG5-4HaHTKjV32lmP_iuG8RQ3ZDS1PsJoGG1Tpzz9ac4W',
			auth_key: null
		}
	];

	db.collection('users', function(err, collection) {
		collection.insert(users, {safe:true}, function(err, result) {});
	});
};

exports.findByUsername = function(options, callback) {
	db.collection('users', function(err, collection) {
		collection.findOne(options, callback);
	});
}

exports.friendsList = function(options, callback) {
	db.collection('users', function(err, collection) {
		collection.find({username: {$ne:options.username}}, {user_image:1, username:1, hide:1}).toArray(function(err, users) {
			callback(null, users);
		});
	});
}
