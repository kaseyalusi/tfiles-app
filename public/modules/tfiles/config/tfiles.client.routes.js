'use strict';

//Setting up route
angular.module('tfiles').config(['$stateProvider',
	function($stateProvider) {
		// Tfiles state routing
		$stateProvider.
		state('listTfiles', {
			url: '/tfiles',
			templateUrl: 'modules/tfiles/views/list-tfiles.client.view.html'
		}).
		state('createTfile', {
			url: '/tfiles/create',
			templateUrl: 'modules/tfiles/views/create-tfile.client.view.html'
		}).
		state('viewTfile', {
			url: '/tfiles/:tfileId',
			templateUrl: 'modules/tfiles/views/view-tfile.client.view.html'
		}).
		state('editTfile', {
			url: '/tfiles/:tfileId/edit',
			templateUrl: 'modules/tfiles/views/edit-tfile.client.view.html'
		});
	}
]);