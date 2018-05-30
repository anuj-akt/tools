$(function() {
	$('a#format-xml').bind('click', function(event) {
		var parameters = { input: $('#input-xml').val() };
		$.post('/xml/print', parameters, function(data) {
			$('#input-xml').val(data);
		});
	});

	$('a#validate-xml').bind('click', function(event) {
		var parameters = { input: $('#input-xml').val() };
		$.post('/xml/validate', parameters, function(data) {
			$('#input-xml').val(data);
		});
	});

	$('a#format-json').bind('click', function(event) {
		var parameters = { input: $('#input-json').val() };
		$.post('/json/print', parameters, function(data) {
			$('#input-json').val(data);
		});
	});
});