$(document).ready(function(){
 
	if (document.location.protocol != 'https:') {
		top.location.href = 'https://' + document.location.host + document.location.pathname;
		return;
	}

});