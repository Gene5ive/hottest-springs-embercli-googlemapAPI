import Ember from "ember";

var GoogleMapComponent = {
    insertMap: function(){
        var mapProp = {
          center:new google.maps.LatLng(44.936088, -122.173220),
          zoom:10,
          mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var marker=new google.maps.Marker({
        position:new google.maps.LatLng(44.936088, -122.173220),
        animation: google.maps.Animation.DROP
        });

        marker.setMap(map);

        var marker=new google.maps.Marker({
        position:new google.maps.LatLng(44.782246, -121.975622),
        animation: google.maps.Animation.DROP

        });

        marker.setMap(map);

    }.on('didInsertElement')
};

export default Ember.Component.extend(GoogleMapComponent);
