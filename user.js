exports.login = function(options, callback) {
	var ret_data;
	var err;

	if(options.username == 'test' && options.pw == '1234') {
		ret_data = { 
			logged: 'Y',
			points: 1000,
			rob_count: 10,
			robbed_count: 5
		};
	} else {
		ret_data = {
			logged: 'N'
		}
	}

	callback(err, ret_data);
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
