(function() {
	function loadImages( images, callback ) {
		var total = images.length,
			count = 0,
			i;
		function check( n ) {
			if( n == total ) {
				callback();
			}
		}

		for( i = 0; i < total; ++i ) {
			var src = images[i];
			var img = document.createElement( "img" );
			img.src = src;
			img.addEventListener( "load", function() {
				if( this.complete ) {
					count++;
					check( count );
				}

			});
		}

        
		
	}

	window.addEventListener( "load", function() {
		var imgs = [ 
            './assets/images/customerprogram.svg',
            './assets/images/barber.svg',
            './assets/images/service.svg',
            './assets/images/hairapp.png',
            './assets/images/file.svg',
            './assets/images/events.svg',
            './assets/images/graphy.png',
            './assets/images/thebeauty.png',
            './assets/images/beautynuri.png',
            './assets/images/tobis.png'

        ];
		loadImages( imgs, function() {
			alert( "Complete!" );
		});


	});

})();