const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

// Function to move the 'No' button to a random position within the btn-group container
function moveNoButtonRandomly() {
    const maxX = btnGroup.clientWidth - noBtn.offsetWidth;
    const maxY = btnGroup.clientHeight - noBtn.offsetHeight;

    // Generate a random position within the btn-group container
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new random position to the 'No' button
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Add event listener for 'Yes' button click
yesBtn.addEventListener("click", () => {
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");

    question.innerHTML = "I love you too! 😘🫶";
    gif.src = "https://i.pinimg.com/originals/55/3d/42/553d42bea9b10e0662a05aa8726fc7f4.gif";
    
    // Hide the 'No' button after 'Yes' is clicked
    noBtn.style.display = "none";
});

// Add event listener to move 'No' button when the cursor hovers over it
noBtn.addEventListener("mouseover", () => {
    setTimeout(() => {
        moveNoButtonRandomly();
    }, 0.005); // 500ms delay for movement
});

// Add event listener to move 'No' button when clicked
noBtn.addEventListener("click", () => {
    moveNoButtonRandomly();
});
