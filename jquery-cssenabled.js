/**
* @license
* jQuery CSS Enabled
*
* Copyright (c) 2010 Boomworks <http://boomworks.com.au/>
* Author: Lindsay Evans
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
(function($) {

	$.cssEnabled = function(){
		var $_ = $('span.css-enabled');
		if(!$_[0]){
			$_ = $('<span class="css-enabled"/>').appendTo('body');
		}
		return !$_.hide().is(':visible');
	};

})(jQuery);
