const track = document.getElementById("image-track")

window.onmousedown = e =>{
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
        maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * 100;
  
}
