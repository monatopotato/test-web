const track = document.getElementById("image-track")

window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.precentage;
}

window.onmousemove = e =>{
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100;
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
        Math.min(nextPercentage,0);
        Math.max(nextPercentage, -100);
        
  track.dataset.precentage = nextPercentage;
  
  track.style.transform = 'translate(${percentage}%, -50%)';
}
