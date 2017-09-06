let isiPhone = navigator.userAgent.toLocaleLowerCase().match(/iPhone/i);

let map = new AMap.Map('container', {
    zoom: 15,
    resizeEnable: true
});

let locationComplete = function (data) {
    if (data.info === 'SUCCESS' && data.type === 'complete') {
        // searchNearBy([data.position.lng, data.position.lat]);
        searchNearBy([116.205467, 39.907761]);
    } else {
        alert("定位失败，暂时无法显示地图信息。");
    }
};

let locationError = function () {
    alert("定位失败, 请确认已经开始定位服务。");
};

let locationIcon = '<div class="locationIcon">' +
    '<img src="images/geolocation.png"></div>';

//  定位插件，整合了浏览器定位、精确IP定位、sdk辅助定位多种手段
map.plugin('AMap.Geolocation', function () {
    let geolocation = new AMap.Geolocation({
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


let walking = null;
AMap.service('AMap.Walking', function () {
    walking = new AMap.Walking({
        map: map
    });
});

let searchNearBy = function (center) {
    map.clearMap();
    map.setZoomAndCenter(16, center);

    //展示定位
    new AMap.Marker({
        position: center,
        map: map,
        content: '<div class="loc_circle"></div><img class="loc_img" src="images/loc.png" style="width:16px;"/>'
    });

    AMap.service(["AMap.PlaceSearch"], function () {
        let placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 10,
            extensions: 'base',
            type: '200300|200300|200302|200303'
        });
        placeSearch.searchNearBy('Toilet', center, 2000, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                let pois = result.poiList.pois;
                pois.forEach(function (poi) {
                    renderDialog(center, poi);
                });
                map.setZoom(16);
            } else {
                alert('什么也没找到');
            }
        });
    });
};


let renderDialog = function (myPos, poi) {
    let divStr = '<div class="makerStyle">' + poi.distance + '米</div>';
    let info = '<div class="infoWindow">'
        + '<div class="info_title">卫生间</div>'
        + '<div class="info_name">名称: ' + poi.name + '</div>'
        + '<div class="info_dis">距您: ' + '<span class="dis_span">' + poi.distance + '米</span>' + '</div>'
        + '<div class="info_address">地址: ' + poi.address + '</div>'
        + '<div class="info_type">类型: ' + (poi.type || '卫生间') + '</div>'
        + '<div class="info_arrow"></div>';

    info += '<div class="info_close" ' + ((isiPhone && isiPhone.length) ? 'ontouchstart' : 'onclick')
        + '="_closeInfoWindow()"><img src="images/close_blue.png" style=""/></div></div>';

    let marker = new AMap.Marker({
        position: poi.location,
        title: poi['name'],
        map: map,
        content: divStr,
        offset: new AMap.Pixel(10, -25)
    });

    function showInfo() {
        let infoWindow = new AMap.InfoWindow({
            content: info,
            offset: new AMap.Pixel(40, -35),
            isCustom: true
        });
        infoWindow.open(map, poi.location);
        //步行路径规划
        walking.clear();
        let start = myPos;
        let end = poi.location;
        walking.Search(start, end);
    }

    AMap.event.addListener(marker, ((isiPhone && isiPhone.length) ? 'touchstart' : 'click'), showInfo);
};

let _closeInfoWindow = function () {
    map.clearInfoWindow();
};

document.querySelector('a.amap-logo').onclick = function () {
    return false;
};