const Page = require( './Page' ),
	Util = require( 'wdio-mediawiki/Util' );

class LoginPage extends Page {
	get username() { return browser.element( '#wpName1' ); }
	get password() { return browser.element( '#wpPassword1' ); }
	get loginButton() { return browser.element( '#wpLoginAttempt' ); }
	get userPage() { return browser.element( '#pt-userpage' ); }

	open() {
		super.openTitle( 'Special:UserLogin' );
	}

	login( username, password ) {
		this.open();
		this.username.setValue( username );
		this.password.setValue( password );
		this.loginButton.click();
	}

	loginAdmin() {
		this.login( browser.options.username, browser.options.password );
	}

	waitForScriptsToBeReady() {
		Util.waitForModuleState( 'mediawiki.api' );
	}
}

module.exports = new LoginPage();
