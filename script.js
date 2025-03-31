const radarImage = document.getElementById('radarImage');
const radarSiteSelect = document.getElementById('radarSite');
const startLoopButton = document.getElementById('startLoop');
const stopLoopButton = document.getElementById('stopLoop');

let loopInterval;
let currentFrame = 0;
const totalFrames = 10;  // Number of frames in the radar loop

// Function to format the frame number
function formatFrameNumber(number) {
    return number.toString().padStart(2, '0');
}

// Function to get the base URL based on the selected radar site
function getBaseURL() {
    const selectedSite = radarSiteSelect.value;
    return `https://radar.weather.gov/ridge/${selectedSite}/RadarImg/`;
}

// Function to update the radar image
function updateRadarImage() {
    const baseURL = getBaseURL();
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

// Update the radar image when the radar site changes
radarSiteSelect.addEventListener('change', updateRadarImage);

// Initialize the radar image
updateRadarImage();
