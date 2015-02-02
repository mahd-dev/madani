describe("MongoDB", function () {
	it("is there a server running", function (next) {
		var MongoClient = require('mongodb').MongoClient;
		MongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/fastdelivery', function (err, db) {
			if (err) {
				console.log('Sorry, there is no mongo db server running.');
			} else {
				var attachDB = function (req, res, next) {
					req.db = db;
					next();
				};
				http.createServer(app).listen(config.port, function () {
					console.log('Express server listening on port ' + config.port);
				});
			}
		});
	});
});
