const touchArea = document.getElementById("touch-area");
const img = document.getElementById("contenedor-img");
const counter = document.getElementById("counter");

function updateCounter(event) {
let cantidad = event.touches.length;

counter.textContent = cantidad;

if(cantidad > 0) {
    img.style.visibility= "visible";
}
else {
    img.style.visibility = "hidden";
}

}

touchArea.addEventListener("touchstart", updateCounter, { passive: false });
touchArea.addEventListener("touchmove", updateCounter, { passive: false });
touchArea.addEventListener("touchend", updateCounter);
touchArea.addEventListener("touchcancel", updateCounter);

