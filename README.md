# jQuery CSS Enabled

jQuery plugin to check whether the user's browser has CSS enabled

## Requirements
[jQuery](http://jquery.com/) (tested with 1.4.2)

## Usage

	if($.cssEnabled()){
		// Do stuff that requires CSS
	}

## Notes
Currently completely untested in anything other than Firefox 3.6. Use at your own risk.
This currently only tests whether an element that is hidden using the jQuery .hide() method is hidden, and as such will NOT work with 'disable styles' in Firefox developer toolbar etc.
