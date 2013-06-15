/*
    HTML Keynote V0.1

    Copyright (C) 2013 TPWD, Web Design Studio, Portugal

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to 
    deal in the Software without restriction, including without limitation the 
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
    sell copies of the Software, and to permit persons to whom the Software is 
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
*/
$(function() {
     
    ////////////////////////////
    //VARS
    var slides = $('#main .slide'),
        selectors = $('#selectors li'),
        currentSlide = null,
        totalSlides = slides.length,
        animationStatus = 0;




    ////////////////////////////
    //EVENTS
    $(window).on("scrollDirection", function(e) {
        if (animationStatus == 0 && e.string == "down") slideToNext();
        else if (animationStatus == 0 && e.string == "up") slideToPrevious();
    });

    selectors.on("click", function() {
        slideTo(selectors.index($(this)));
    });
    
    $(window).on('hashchange', function() {
        slideToId(window.location.hash);
    });




    ////////////////////////////
    //FUNCTIONS
    function slideTo(i) {
        animationStatus = 1;
        
        function slideIn(el) {
            var content = el.find(".bottom_content");
            
            //HIDE CONTENT
            content.css({ "opacity": 0, "bottom": -50 });
            
            //SHOW CONTAINER
            el.fadeIn();
            
            //ANIMATE TEXT CONTENT
            content.animate({
                "opacity": 1,
                "bottom": "20px"
            }, 400, null, function() {
                setTimeout(function() { animationStatus = 0; }, 500);
            });
            
        }

        if (currentSlide != null) {
            slides.eq(currentSlide).fadeOut(400, function() {
                slideIn(slides.eq(i));
            });
        } else {
            slideIn(slides.eq(i));
        }
        selectors.removeClass("selected").eq(i).addClass("selected");
        currentSlide = i;

        document.location.hash = (typeof slides.eq(currentSlide).attr("id") != "undefined") ? "#" + slides.eq(currentSlide).attr("id") : "";
    }
    
    function slideToPrevious() {
        if (currentSlide > 0)
           slideTo(currentSlide - 1);
        else 
           slideTo(totalSlides - 1);
    }
    
    function slideToNext() {
        if (currentSlide < totalSlides-1)
           slideTo(currentSlide + 1);
        else 
           slideTo(0);
    }
    
    function slideToId(id) {
        var i = slides.index($(".slide"+id));
        
        if (i >= 0 && i < totalSlides) slideTo(i);
        else {
            slideTo(0);
            window.location.hash = "";
        }
    }




    ////////////////////////////
    //INIT
    if (window.location.hash != "") slideToId(window.location.hash); else slideTo(0);

});