const video = document.querySelector('.flex');
const speedBar = document.querySelector('.speed-bar');
const minSpeed = 0.5;
const maxSpeed = 4;
const speedIncrement = 0.1;

function handleSpeedChange(e) {
  const speed = (e.offsetX / speedBar.offsetWidth) * (maxSpeed - minSpeed) + minSpeed;
  const playbackRate = speed.toFixed(1); // Round to 1 decimal place
  video.playbackRate = playbackRate;
  speedBar.textContent = `${playbackRate}×`;
}

speedBar.addEventListener('mousemove', (e) => {
  if (e.buttons === 1) { // Only trigger when mouse is clicked
    handleSpeedChange(e);
  }
});

speedBar.addEventListener('mousedown', () => {
  speedBar.classList.add('active');
  document.addEventListener('mousemove', handleSpeedChange);
});

document.addEventListener('mouseup', () => {
  speedBar.classList.remove('active');
  document.removeEventListener('mousemove', handleSpeedChange);
});
