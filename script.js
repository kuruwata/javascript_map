// JavaScript
console.log('Hello world!');

var map = L.map('map').setView([33.67037967336356, 130.445686393194], 16);

// Open Street Map hot
//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

//アイコン
const whiteIcon = L.icon({
    iconUrl: 'images/ico.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });

L.marker([33.67315568289257, 130.44127754759708], { icon: whiteIcon }).addTo(map).bindPopup('ファミリーマート九産大駅前');
L.marker([33.671208884689136, 130.4422953993911], { icon: whiteIcon }).addTo(map).bindPopup('セブンイレブン福岡九産大駅前');
L.marker([33.67375011630956, 130.4448308545087], { icon: whiteIcon }).addTo(map).bindPopup('ファミリーマート唐原7丁目店');
L.marker([33.67340673279209, 130.4479972008917], { icon: whiteIcon }).addTo(map).bindPopup('セブンイレブン福岡九産大駅前');

const circle = L.circle([33.67042203129781, 130.4452504184353], {
  color: 'red', //円の輪郭線の色
  fillColor: '#f03', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 500 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径500mの範囲").openPopup();

// クリック位置の緯度経度表示
const bindup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);