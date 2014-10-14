'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Tfile Schema
 */
var TfileSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please add a TestFile name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
        content: {
          type:String,
          default: ''
        },
        tags: {
          type:[String],
          default: {}
        }
});

mongoose.model('Tfile', TfileSchema);