'use strict';

(function() {
	// Tfiles Controller Spec
	describe('Tfiles Controller Tests', function() {
		// Initialize global variables
		var TfilesController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Tfiles controller.
			TfilesController = $controller('TfilesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Tfile object fetched from XHR', inject(function(Tfiles) {
			// Create sample Tfile using the Tfiles service
			var sampleTfile = new Tfiles({
				name: 'New Tfile'
			});

			// Create a sample Tfiles array that includes the new Tfile
			var sampleTfiles = [sampleTfile];

			// Set GET response
			$httpBackend.expectGET('tfiles').respond(sampleTfiles);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.tfiles).toEqualData(sampleTfiles);
		}));

		it('$scope.findOne() should create an array with one Tfile object fetched from XHR using a tfileId URL parameter', inject(function(Tfiles) {
			// Define a sample Tfile object
			var sampleTfile = new Tfiles({
				name: 'New Tfile'
			});

			// Set the URL parameter
			$stateParams.tfileId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/tfiles\/([0-9a-fA-F]{24})$/).respond(sampleTfile);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.tfile).toEqualData(sampleTfile);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Tfiles) {
			// Create a sample Tfile object
			var sampleTfilePostData = new Tfiles({
				name: 'New Tfile'
			});

			// Create a sample Tfile response
			var sampleTfileResponse = new Tfiles({
				_id: '525cf20451979dea2c000001',
				name: 'New Tfile'
			});

			// Fixture mock form input values
			scope.name = 'New Tfile';

			// Set POST response
			$httpBackend.expectPOST('tfiles', sampleTfilePostData).respond(sampleTfileResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Tfile was created
			expect($location.path()).toBe('/tfiles/' + sampleTfileResponse._id);
		}));

		it('$scope.update() should update a valid Tfile', inject(function(Tfiles) {
			// Define a sample Tfile put data
			var sampleTfilePutData = new Tfiles({
				_id: '525cf20451979dea2c000001',
				name: 'New Tfile'
			});

			// Mock Tfile in scope
			scope.tfile = sampleTfilePutData;

			// Set PUT response
			$httpBackend.expectPUT(/tfiles\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/tfiles/' + sampleTfilePutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid tfileId and remove the Tfile from the scope', inject(function(Tfiles) {
			// Create new Tfile object
			var sampleTfile = new Tfiles({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Tfiles array and include the Tfile
			scope.tfiles = [sampleTfile];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/tfiles\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleTfile);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.tfiles.length).toBe(0);
		}));
	});
}());