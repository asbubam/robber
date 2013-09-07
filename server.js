var restify = require('restify')
var bunyan = require('bunyan')

var server = restify.createServer();

var user = require('./user');

server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

// routing
server.get('/api/login', login);
server.get('/api/friendslist', friendslist);

/*
server.on('after', restify.auditLogger({
  log: bunyan.createLogger({
    name: 'audit',
    stream: process.stdout
  })
}));
*/

server.listen(3002, function() {
  console.log('%s listening at %s', server.name, server.url);
});

function handleError(err, next) {
  if (err instanceof Error)
    next(err);
  else
    next(new Error(err));
}

function login(req, res, next) {
	var username = req.params.username;
	var pw = req.params.pw;

  user.login({ username: username, pw: pw }, function (err, data) {
    if (err) return handleError(err, next);
    res.send(data);
    return next();
  });
}

function friendslist(req, res, next) {
	var username = req.params.username;

	user.friendslist({ username: username }, function (err, data) {
    if (err) return handleError(err, next);
    res.send(data);
		return next();
	});
}
