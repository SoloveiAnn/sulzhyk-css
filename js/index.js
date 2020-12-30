//destroy button
function destroy() {
  document.querySelector("html").innerHTML = "";
  document.querySelector("html").style.backgroundColor = "black";
}
const buttonDestroy = document.querySelector(".destroy-btn");
buttonDestroy.addEventListener("click", destroy);

//map

var L;

window.onload = function () {
  L.mapquest.key = "YOUR-API-KEY-HERE";

  var map = L.mapquest.map("map", {
    center: [49.83969480127321, 24.031518953411233],

    layers: L.mapquest.tileLayer("map"),
    zoom: 17,
  });

  map.addControl(L.mapquest.control());

  L.marker([49.83969480127321, 24.031518953411233], {
    icon: L.mapquest.icons.marker({
      primaryColor: "#0d3c00",
      secondaryColor: "#79a207",
      shadow: true,
      size: "md",
      symbol: "A",
    }),
  })
    .bindPopup("Це Львів, дитинко!")
    .addTo(map);
};

      