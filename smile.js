const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");

    question.innerHTML = "I love you too!🫶😘";
    gif.src = "https://i.pinimg.com/originals/55/3d/42/553d42bea9b10e0662a05aa8726fc7f4.gif";
    
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Function to move the 'No' button to a random position within the btn-group container

noBtn.addEventListener("mouseover", () => {
    setTimeout(() => {
        const maxX = btnGroup.clientWidth - noBtn.offsetWidth;
        const maxY = btnGroup.clientHeight - noBtn.offsetHeight;

        // Generate random position within the btn-group container
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }, 0.005); // Delay of 500 milliseconds (0.5 seconds)
});

