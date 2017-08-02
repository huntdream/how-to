(function (window) {

    var container = document.querySelector('#gallery');

    if (!container) {
        console.error('Please specify the correct id of your gallery');
        return;
    }

    var first = container.querySelector('.preview');
    var zoomed = container.querySelector('.zoomed');

    if (!zoomed) {
        console.error('Please add a .zoomed element to your gallery');
        return;
    }

    if (!first) {
        console.error('Please');
    }
    else {
        zoomed.style.backgroundImage = 'url(' + first.src + ')';
    }

    container.addEventListener("click", function (event) {
        var elem = event.target;

        if (elem.classList.contains("preview")) {
            zoomed.style.backgroundImage = 'url(' + elem.src + ')';
        }
    });

    zoomed.addEventListener('mouseenter', function(e) {
        this.style.backgroundSize = "250%";
    }, false);

    zoomed.addEventListener('mousemove', function(e) {

        // getBoundingClientReact gives us various information about the position of the element.
        var dimentions = this.getBoundingClientRect();

        // Calculate the position of the cursor inside the element (in pixels).
        var x = e.clientX - dimentions.left;
        var y = e.clientY - dimentions.top;

        // Calculate the position of the cursor as a percentage of the total size of the element.
        var xpercent = Math.round(100 / (dimentions.width / x));
        var ypercent = Math.round(100 / (dimentions.height / y));

        // Update the background position of the image.
        this.style.backgroundPosition = xpercent+'% ' + ypercent+'%';

    }, false);

    zoomed.addEventListener('mouseout',function(e){
        this.style.backgroundSize = "cover";
        // this.style.backgroundPosition= '0 0';
    })
})(window);