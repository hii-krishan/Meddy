document.addEventListener("DOMContentLoaded", function() {
   
    const elements = document.querySelectorAll(".feature-item");
    elements.forEach((el, index) => {
        el.style.animation = `fadeIn 0.5s ease ${(index + 1) * 0.2}s forwards`;
        el.style.opacity = "0";
    });

    function checkIfInView() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        featureItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top + scrollY;

            if (scrollY + windowHeight > itemTop + 50) {
                item.classList.add('scroll-in-view');
            }
        });
    }

    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); 
});

const instructions = document.getElementById('breathing-instructions');
const circle = document.querySelector('.circle');
const startButton = document.querySelector('.start-button');
let breatheInterval;
let isBreathing = false;

function toggleBreathingExercise() {
    if (isBreathing) {
        stopBreathingExercise();
    } else {
        startBreathingExercise();
    }
}

function startBreathingExercise() {
    isBreathing = true;
    startButton.innerText = 'Stop Breathing Exercise';
    instructions.style.display = 'block';
    instructions.innerText = 'Breathe In...';
    breatheInterval = setInterval(breathingCycle, 12000);
    breathingCycle(); 
}

function stopBreathingExercise() {
    isBreathing = false;
    startButton.innerText = 'Start Breathing Exercise';
    instructions.style.display = 'none';
    circle.style.transform = 'scale(1)'; 
    clearInterval(breatheInterval);
}

function breathingCycle() {
    instructions.innerText = 'Breathe In...';
    circle.style.transition = 'transform 5s ease-in-out';
    circle.style.transform = 'scale(1.4)';

    setTimeout(() => {
        instructions.innerText = 'Hold...';
        circle.style.transition = 'none';

        setTimeout(() => {
            instructions.innerText = 'Breathe Out...';
            circle.style.transition = 'transform 5s ease-in-out';
            circle.style.transform = 'scale(1)';

        }, 4000);

    }, 4000); 
}

const stories = document.querySelectorAll('.story');
let currentIndex = 0;

function showStory(index) {
    stories.forEach((story, i) => {
        story.style.display = i === index ? 'flex' : 'none';
    });
}

function showPreviousStory() {
    currentIndex = (currentIndex === 0) ? stories.length - 1 : currentIndex - 1;
    showStory(currentIndex);
}

function showNextStory() {
    currentIndex = (currentIndex === stories.length - 1) ? 0 : currentIndex + 1;
    showStory(currentIndex);
}

showStory(currentIndex);


let audioPlayer = document.getElementById('audio-player');
let audioSource = document.getElementById('audio-source');
let playerImage = document.getElementById('player-image');
let currentSong = null;

function playSong(audioFile, button, imageSrc) {
    if (currentSong === audioFile) {
        // If the same song is clicked again, stop it
        audioPlayer.pause();
        currentSong = null;
        button.classList.remove('playing'); // Reset the button class
    } else {
        // If a new song is clicked
        audioSource.src = audioFile;
        audioPlayer.load(); // Reload the audio element
        audioPlayer.play();

        // Update the player image
        playerImage.src = imageSrc;

        currentSong = audioFile;
        // Add a class to indicate the song is playing
        button.classList.add('playing');
    }
}

