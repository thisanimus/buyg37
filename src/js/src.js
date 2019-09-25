'use strict';
if(document.getElementById('viewer')){
	const viewer = document.getElementById('viewer');
	const parent = viewer.parentNode;

	const threesixty = new ThreeSixty(viewer, {
		image: 'assets/img/spriteSm.jpg',
		width: 600,
		height: 300,
		count: 30,
		perRow: 6,
		speed: 100,
		prev: document.getElementById('left'),
		next: document.getElementById('right')
	});
	fullWidthScale(viewer, parent);
	
	
	var imgLg = new Image();
	
	imgLg.onload = (function(threesixty) {
		threesixty.destroy();
		const threesixtyLg = new ThreeSixty(viewer, {
			image: 'assets/img/spriteLg.jpg',
			width: 1200,
			height: 600,
			count: 30,
			perRow: 6,
			speed: 100,
			prev: document.getElementById('left'),
			next: document.getElementById('right')
		  });
		  fullWidthScale(viewer, parent);
	})(threesixty);
	
	imgLg.src = 'assets/img/spriteLg.jpg';
	
	
	
	
	function fullWidthScale(el, parent) {
		
		var scale = parent.clientWidth / el.offsetWidth;
		
		el.style.msTransform = 'scale(' + scale + ')';
		el.style.webkitTransform = 'scale(' + scale + ')';
		el.style.MozTransform = 'scale(' + scale + ')';
		el.style.OTransform = 'scale(' + scale + ')';
		el.style.transform = 'scale(' + scale + ')';
	}
	
	//fullWidthScale(viewer, parent);
	
	window.addEventListener('resize', function(e){
		fullWidthScale(viewer, parent);
	});
	
	viewer.addEventListener('mouseover', function(e){
		setTimeout(function(){ 
			parent.querySelector('.overlay').dataset.show = 'false';
		}, 3000);
		
	});
	
}






