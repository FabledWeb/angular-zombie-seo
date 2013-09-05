var http = require('http')
  , app = require('./app');

exports.start = function () {
	return http.createServer(app).listen(app.get('port'), function () { console.log('running on port ' + app.get('port')) });
};
