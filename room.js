var db = require('./db');

exports.hide = function(options, callback) {
	var ret_data;
	var err;

	if(!options.username || options.username == '') {
		return callback(new Error('You must login first.'));
	}

	if(!options.hide) {
		return callback(new Error('invalid parameter'));
	}

	db.hide(options, function(err, res) {	
		if(res) {
			ret_data = {};
		} else {
			ret_data = {};
		}
	});
	
	callback(err, ret_data);
}

exports.roominfo = function(options, callback) {
	var ret_data;
	var err;
	
	if(!options.username || options.username == '') {
		return callback(new Error('You must login first.'));
	}

	if(!options.friend_username) {
		return callback(new Error('invalid parameter'));
	}

	ret_data = {
		item_no: 1,
		matrix: [
			{
				x: 3,
				y: 2,
				points: 100
			}
		]
	};
	callback(err, ret_data);
}
