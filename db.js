var mongo = require('mongodb');

var Server = mongo.Server,
		Db = mongo.Db,
		Bson = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('robber', server, {safe: true});

exports.init = function() {
	db.open(function(err, db) {
		if(err) {
			console.log('connected to robber db');
			db.collection('users', {strict:true}, function(err, collection) {
				if(err) {
					console.log("The 'users' collection doesn't exist.");
				}
				populateDB();
			});
		}
	});
};

function popluateDB() {
		var users = [
		{
				username: "test",
				pw: "1234",
				points: 1000,
				rob_count: 0,
				robbed_count: 0
		},
		{
				username: "test2",
				pw: "1234",
				points: 1000,
				rob_count: 0,
				robbed_count: 0

		}];
 
		db.collection('users', function(err, collection) {
				collection.insert(wines, {safe:true}, function(err, result) {});
		});
 
};

