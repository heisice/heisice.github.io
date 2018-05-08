$(document).ready(function(){
 
	if (document.location.protocol != 'https:') {
		top.location.href = 'https://' + document.location.host + document.location.pathname;
		return;
	}


	var feed = new Instafeed({
		get: 'user',
		userId: '741841',
		clientId: 'd0ccf302923449508bd6e9eca76caa3b',
		accessToken: '741841.4d295ec.3a915620392747edadc5c49ba9416a20',
		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
		success: function() {
			$("#loading").remove();
		}
	});
	feed.run();

});