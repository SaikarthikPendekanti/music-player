const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const nextTrackButton = document.getElementById('next-track');
const volumeControl = document.getElementById('volume-control');
const playlistItems = document.querySelectorAll('#playlist li');
let currentTrackIndex = 0;

playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentTrackIndex = index;
        playTrack();
    });
});

function playTrack() {
    const trackSrc = playlistItems[currentTrackIndex].getAttribute('data-src');
    audio.src = trackSrc;
    audio.play();
    playPauseButton.textContent = 'Pause';
}

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

nextTrackButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlistItems.length;
    playTrack();
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

audio.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlistItems.length;
    playTrack();
});