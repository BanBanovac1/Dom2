function getVals() {
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
        var tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }
    var displayElementMax = parent.getElementsByClassName("range-info-max-value")[0];
    var displayElementMin = parent.getElementsByClassName("range-info-min-value")[0];
    displayElementMax.innerHTML = "$ " + slide2;
    displayElementMin.innerHTML = "$ " + slide1;
}

window.onload = function () {
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
    for (var x = 0; x < sliderSections.length; x++) {
        var sliders = sliderSections[x].getElementsByTagName("input");
        for (var y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}

function changeIcon() {
    var magnifyIcon = document.getElementsByClassName('search-box-icon');
    magnifyIcon[0].style.color = 'black';
    document.addEventListener("click", function (event) {
        if (event.target.name != "searchBox") {
            magnifyIcon[0].style.color = "rgb(203,203,203)";
        }
    });
}

function showList() {
    var icon = document.getElementsByClassName('color-select-icon');
    var colorList = document.getElementsByClassName('color-select-list');
    if (colorList[0].style.display === 'block') {
        colorList[0].style.display = 'none';
        icon[0].innerHTML = 'keyboard_arrow_down';
    }
    else {
        colorList[0].style.display = 'block';
        icon[0].innerHTML = 'keyboard_arrow_up';
    }
    document.addEventListener("click", function (event) {
        if (event.target.className != "color-select-list" && event.target.className != "color-select-box") {
            colorList[0].style.display = 'none';
            icon[0].innerHTML = 'keyboard_arrow_down';
        }
    });
}