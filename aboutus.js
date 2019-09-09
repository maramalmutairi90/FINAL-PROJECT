function initMap () {
    var location = {lat: -24.889570, lng: 46.600800};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position:  location,
        map: map

    });
}


