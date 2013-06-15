//HORIZONTAL SCROLL
function handle(delta) {
    if (typeof window.pageXOffset != undefined && typeof window.pageXOffset != "undefined") {
        var offsetX = window.pageXOffset;
    } else {
        var offsetX = document.documentElement.scrollLeft;
    }
    
    //console.log(delta);
    
	if (delta < 0) {
        $.event.trigger({
        	type: "scrollDirection",
        	string: "down",
        	integer: -1,
        	delta: delta
        });
	} else {
        $.event.trigger({
        	type: "scrollDirection",
        	string: "up",
        	integer: 1,
        	delta: delta
        });
    }
}

function wheel(event) {
	var delta = 0;
	if (!event) event = window.event;

	if (event.axis == 2 || event.wheelDeltaY || event.y) {
	    
    	if (event.wheelDeltaY) {
    		delta = event.wheelDeltaY/120; 
    	} else if (event.wheelDelta) {
    		delta = event.wheelDelta/120; 
    	} else if (event.detail) {
    		delta = -event.detail/3;
    	}
    	
    	//DO THE ANIMATION
    	if (delta != 0) handle(delta);
    
    	//PREVENT DEFAULT
        if (event.preventDefault) event.preventDefault();
    	event.returnValue = false;
    }
}

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;
