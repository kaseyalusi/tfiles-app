'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var tfiles = require('../../app/controllers/tfiles');

	// Tfiles Routes
	app.route('/tfiles')
		.get(tfiles.list)
		.post(users.requiresLogin, tfiles.create);

	app.route('/tfiles/:tfileId')
		.get(tfiles.read)
		.put(users.requiresLogin, tfiles.hasAuthorization, tfiles.update)
		.delete(users.requiresLogin, tfiles.hasAuthorization, tfiles.delete);

	// Finish by binding the Tfile middleware
	app.param('tfileId', tfiles.tfileByID);
};