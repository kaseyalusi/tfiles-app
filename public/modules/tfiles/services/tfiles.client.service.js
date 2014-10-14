'use strict';

//Tfiles service used to communicate Tfiles REST endpoints
angular.module('tfiles').factory('Tfiles', ['$resource',
	function($resource) {
		return $resource('tfiles/:tfileId', { tfileId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);