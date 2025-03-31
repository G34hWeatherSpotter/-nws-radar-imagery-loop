const radarImage = document.getElementById('radarImage');
const startLoopButton = document.getElementById('startLoop');
const stopLoopButton = document.getElementById('stopLoop');

let loopInterval;
let currentFrame = 0;
const totalFrames = 10;  // Number of frames in the radar loop
const baseURL = 'https://radar.weather.gov/ridge/Conus/RadarImg/';

// Function to format the frame number
function formatFrameNumber(number) {
    return number.toString().padStart(2, '0');
}

// Function to update the radar image
function updateRadarImage() {
    radarImage.src = `${baseURL}${formatFrameNumber(currentFrame)}.gif`;
    currentFrame = (currentFrame + 1) % totalFrames;
}

// Start the radar loop
function startLoop() {
    if (!loopInterval) {
        loopInterval = setInterval(updateRadarImage, 500);
    }
}

// Stop the radar loop
function stopLoop() {
    clearInterval(loopInterval);
    loopInterval = null;
}

startLoopButton.addEventListener('click', startLoop);
stopLoopButton.addEventListener('click', stopLoop);

// Initialize the radar image
updateRadarImage();
