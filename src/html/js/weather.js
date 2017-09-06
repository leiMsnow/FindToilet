var locationIcon = '<div class="locationIcon">'
    + '<img src="images/geolocation.png"/>'
    + '</div>';

let map = new AMap.Map('container', {
    zoom: 15,
    resizeEnable: true
});

var locationComplete = function (data) {

    // showWeather([data.position.lng, data.position.lat]);
    showWeather([116.205467, 39.907761]);

};
var locationError = function () {
    alert('定位失败，请在手机上开启定位。');
    showWeather([116.205467, 39.907761]);
};

map.plugin('AMap.Geolocation', function () {
    var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 60000,
        maximumAge: 0,
        convert: true,
        showButton: true,
        buttonPosition: 'LB',
        buttonOffset: new AMap.Pixel(10, 10),
        showMarker: true,
        showCircle: true,
        panToLocation: true,
        zoomToAccuracy: true,
        buttonDom: locationIcon
    });
    map.addControl(geolocation);
    geolocation.getCurrentPosition();
    AMap.event.addListener(geolocation, 'complete', locationComplete);
    AMap.event.addListener(geolocation, 'error', locationError);
});

map.plugin(["AMap.ToolBar"], function () {
    map.addControl(new AMap.ToolBar());
});
map.plugin(["AMap.Scale"], function () {
    map.addControl(new AMap.Scale());
});

function showWeather(center) {
    map.clearMap();
    map.setZoomAndCenter(16, center);
    var marker = new AMap.Marker({
        position: center,
        map: map,
        content: '<div class="loc_circle"></div><img class="loc_img" src="images/loc.png" style="width:16px;"/>'
    });

    AMap.service('AMap.Geocoder', function () {
        var geo = new AMap.Geocoder();
        geo.getAddress(center, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                //获取天气信息
                var district = result.regeocode.addressComponent.district;
                AMap.service('AMap.Weather', function () {
                    var weather = new AMap.Weather();
                    weather.getLive(district, function (err, result) {
                        if (err) {
                            return;
                        }
                        document.querySelector('#weather_pro').innerHTML = result.province;
                        document.querySelector('#weather_city').innerHTML = result.city;
                        document.querySelector('#weather_weather').innerHTML = result.weather;
                        document.querySelector('#weather_wind').innerHTML = result.windDirection;
                        document.querySelector('#weather_temp').innerHTML = result.temperature;
                        document.querySelector('#weather_time').innerHTML = result.reportTime;
                    });
                });
            }
        });
    });
}

document.querySelector('a.amap-logo').onclick = function () {
    return false;
};
