'use strict';

// Configuring the Articles module
angular.module('tfiles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Tfiles', 'tfiles', 'dropdown', '/tfiles(/create)?');
		Menus.addSubMenuItem('topbar', 'tfiles', 'List Tfiles', 'tfiles');
		Menus.addSubMenuItem('topbar', 'tfiles', 'New Tfile', 'tfiles/create');
	}
]);