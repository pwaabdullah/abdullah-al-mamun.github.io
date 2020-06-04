'use strict';

var vizHeader = document.getElementById('viz_header');

vizHeader.addEventListener('mouseover', function(e) {
	vizHeader.classList.add("animated");
	vizHeader.classList.add("bounce");
});