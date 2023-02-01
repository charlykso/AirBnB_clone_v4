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

		
	$.ajax({
		type: 'POST',
		url: 'http://0.0.0.0:5001/api/v1/places_search/',
		contentType: 'application/json',
		data: '{}',
		success: function (data) {
		for (let currentPlace of data) {
			$('.places').append('<article> <div class="title"> <h2>' + currentPlace.name + '</h2><div class="price_by_night">' + '$' + currentPlace.price_by_night + '</div></div> <div class="information"> <div class="max_guest"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.max_guest + ' Guests</div><div class="number_rooms"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.number_rooms + ' Bedrooms</div><div class="number_bathrooms"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.number_bathrooms + ' Bathroom </div></div> <div class="user"></div><div class="description">' + '$' + currentPlace.description + '</div></article>');
		}
		}
	});


	$('button').click(function(){

		$.ajax({
			type: 'POST',
			url: 'http://0.0.0.0:5001/api/v1/places_search/',
			contentType: 'application/json',
			data: '{}',
			success: function (data) {
			for (let currentPlace of data) {
				$('.places').append('<article> <div class="title"> <h2>' + currentPlace.name + '</h2><div class="price_by_night">' + '$' + currentPlace.price_by_night + '</div></div> <div class="information"> <div class="max_guest"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.max_guest + ' Guests</div><div class="number_rooms"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.number_rooms + ' Bedrooms</div><div class="number_bathrooms"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.number_bathrooms + ' Bathroom </div></div> <div class="user"></div><div class="description">' + '$' + currentPlace.description + '</div></article>');
			}
			}
		});

	});

});
