var db = require('./db');

exports.login = function(options, callback) {
	var ret_data;
	var err;

	db.findByUsername(options, function(err, res) {
		if(res) {
			ret_data = res;
			ret_data.logged = 'Y';
			callback(err, ret_data);
		}	else {
			ret_data = { logged: 'N' };
			callback(err, ret_data);
		}
	});
}

exports.friendslist = function(options, callback) {
	var ret_data;
	var err;

	if(!options.username || options.username == '') {
		return callback(new Error('You must login first'));
	}

	ret_data = [
		{
			user_image: 'http://static.comicvine.com/uploads/original/12/128240/2493230-406px_ironman_head.jpg',
			username: 'test2',
			hide: 'Y'
		},
		{
			user_image: 'http://images1.wikia.nocookie.net/__cb20100819014815/superman/images/7/72/Superman.jpg',
			username: 'test3',
			hide: 'N'
		}
	];

	callback(err, ret_data);
}
