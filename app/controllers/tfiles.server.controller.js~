'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Tfile = mongoose.model('Tfile'),
	_ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Tfile already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Create a Tfile
 */
exports.create = function(req, res) {
	var tfile = new Tfile(req.body);
	tfile.user = req.user;

	tfile.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tfile);
		}
	});
};

/**
 * Show the current Tfile
 */
exports.read = function(req, res) {
	res.jsonp(req.tfile);
};

/**
 * Update a Tfile
 */
exports.update = function(req, res) {
	var tfile = req.tfile ;

	tfile = _.extend(tfile , req.body);

	tfile.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tfile);
		}
	});
};

/**
 * Delete an Tfile
 */
exports.delete = function(req, res) {
	var tfile = req.tfile ;

	tfile.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tfile);
		}
	});
};

/**
 * List of Tfiles
 */
exports.list = function(req, res) { Tfile.find().sort('-created').populate('user', 'displayName').exec(function(err, tfiles) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tfiles);
		}
	});
};

/**
 * Tfile middleware
 */
exports.tfileByID = function(req, res, next, id) { Tfile.findById(id).populate('user', 'displayName').exec(function(err, tfile) {
		if (err) return next(err);
		if (! tfile) return next(new Error('Failed to load Tfile ' + id));
		req.tfile = tfile ;
		next();
	});
};

/**
 * Tfile authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.tfile.user.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};