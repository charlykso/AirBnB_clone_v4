//listen for changes on each input checkbox tags

let checked_box = {};
$(document).ready(function () {
	$('input:checkbox').change(function () {
		// if ($(this).is(':checked')) {
		// 	console.log($(this).data('name'));
			
		// }
		// $('div.amenities h4').html(function () {
		// 	Object.keys(checked_box).forEach(function (key) {
		// 		amenities.push(checked_box[key]);
		// 	});
		// })
		if ($(this).is(':checked')) {
			checked_box[$(this).data('id')] = $(this).data('name');
		}
		else {
			delete checked_box[$(this).data('id')];
		}
		$('div.amenities h4').html(function () {
			let amenities = [];
			Object.keys(checked_box).forEach(function (key) {
				amenities.push(checked_box[key]);
			});
			if (amenities.length === 0) {
				return ('&nbsp');
			}
			return (amenities.join(', '));
		});
		
	});


	$.get('http://0.0.0.0:5001/api/v1/status/',
		function (data) {
			console.log(data.status);
			if (data.status === 'OK') {
				$('DIV#api_status').addClass('available');
			} else {
				$('DIV#api_status').removeClass('available');
			}
		});
});
