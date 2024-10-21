let timeout;

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Function to show the hamburger menu
function showHamburgerMenu() {
    hamburger.classList.add("active");
    navLinks.classList.add("active");
}

// Function to reset the timer
function resetTimer() {
    clearTimeout(timeout);
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");

    // Set a new timeout
    timeout = setTimeout(showHamburgerMenu, 5000);
}

// Event listeners for user activity
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onkeypress = resetTimer;

// Event listener for hamburger menu click
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Set the initial timeout
timeout = setTimeout(showHamburgerMenu, 5000);
