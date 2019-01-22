// var images = new Array()

// function preload() {
//     for(i =0; i < preload.arguments.length; i++) {
//         images[i] = new Image()
//         images[i].src = preload.arguments[i]
//     }
// }

// preload(
//     './assets/images/customerprogram.svg',
//     './assets/images/barber.svg',
//     './assets/images/service.svg',
//     './assets/images/hairapp.png',
//     './assets/images/file.svg',
//     './assets/images/events.svg',
//     './assets/images/graphy.png',
//     './assets/images/thebeauty.png',
//     './assets/images/beautynuri.png',
//     './assets/images/tobis.png',
    
// );


function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
        var img3 = new Image();
        var img4 = new Image();
        var img5 = new Image();
        var img6 = new Image();
        var img7 = new Image();
        var img8 = new Image();
        var img9 = new Image();
        var img10 = new Image();

		img1.src = './assets/images/customerprogram.svg';
		img2.src = './assets/images/barber.svg';
        img3.src = './assets/images/service.svg';
        img4.src = './assets/images/hairapp.png';
        img5.src = './assets/images/file.svg';
        img6.src =  './assets/images/events.svg';
        img7.src = './assets/images/graphy.png';
        img8.src = './assets/images/thebeauty.png';
        img9.src = './assets/images/beautynuri.png';
        img10.src = './assets/images/tobis.png';

	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);