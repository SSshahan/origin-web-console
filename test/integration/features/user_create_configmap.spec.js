'use strict';

const h = require('../helpers');
const projectHelpers = require('../helpers/project.js');
const CreateProjectPage = require('../page-objects/createProject').CreateProjectPage;
const ConfigMapsPage = require('../page-objects/configmaps.js').ConfigMapsPage;

describe('User create config-maps', () => {
	beforeEach(() => {
		h.commonSetup();
		h.login();
		projectHelpers.deleteAllProjects();
	});

	afterEach(() => {
		h.commonTeardown();
	});

	describe('User create config maps with invalid values', () => {
		it('Give error name could not end with dash', () => {
			let project = projectHelpers.projectDetails();
			let createProjectPage = new CreateProjectPage(project);
			createProjectPage.visit();
			createProjectPage.createProject();
			let configMapsPage = ConfigMapsPage(project);
			configMapsPage.visit();
			h.setInputValue('map.metadata.name', 'myconfigmap-');
			h.setInputValue('item.key','my.key');
			h.waitFor('.help-block', 'Name must consist of lower-case letters, numbers, periods, and hyphens. It must start and end with a letter or a number');
		});
	});

});
