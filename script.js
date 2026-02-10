const messages = [
    "Are you sure?",
    "Really sure??",
    "Do you hate me?",
    "I'll let you pick the movie...",
    "Don't break my heart ;(",
    "I'm going to cry...",
    "You are breaking my heart!",
    "Okay, now I'm actually sad.",
    "Just say YES already! ❤️"
];

const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

const messageIndex = 0;

function handleNoClick() {
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    const currentMessage = messages[messageIndex];
    noButton.textContent = currentMessage;
    
    // This makes the text cycle through the messages
    messageIndex = (messageIndex + 1) % messages.length;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

noButton.addEventListener('click', handleNoClick);
yesButton.addEventListener('click', handleYesClick);
