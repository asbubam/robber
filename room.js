exports.hide = function(options, callback) {
	var ret_data;
	var err;

	if(!options.username || options.username == '') {
		return callback(new Error('You must login first.'));
	}

	if(!options.x || !options.y || !options.points) {
		return callback(new Error('invalid parameter'));
	}

	ret_data = [
		{
			x: options.x,
			y: options.y,
			points: 100
		}
	];
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
