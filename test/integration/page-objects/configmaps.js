'use strict';

const Page = require('./page').Page;

class ConfigMapsPage extends Page{
	constructor(project, menu)
	super(project, menu)

	getUrl(){
		return 'project/' + this.project + 'browse/config-maps'
	}

	submit(){
		let button = element(by.buttonText('Create'));
		button.click();
	}
}

exports.ConfigMapsPage = ConfigMapsPage;
