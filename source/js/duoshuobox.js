$(".duoshuobut").click(function(event) {
	/* Act on the event */
	$(".duoshuobut").fadeOut('slow', function() {
		$(".ds-thread").slideDown('400', function() {

		});
	});
});