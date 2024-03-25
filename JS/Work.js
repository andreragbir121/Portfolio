document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".row img");
    let isScrollingDown = false;

    function addFadeInClass() {
        images.forEach((image, index) => {
            const imageTop = image.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Calculate a factor based on the scroll position to control the speed
            const scrollFactor = Math.min(1, window.scrollY / windowHeight);

            // Calculate the adjusted duration and delay based on the scroll factor and index
            const adjustedDuration = 0.8 + scrollFactor * 0.8 + "s"; // Adjust the values as needed
            const delay = index * 0.3; // Adjust the delay between each image

            // Apply the adjusted duration, delay, and other transition properties
            image.style.transition = `opacity ${adjustedDuration} cubic-bezier(0.55, 0.055, 0.675, 0.19) ${delay}s, transform ${adjustedDuration} cubic-bezier(0.55, 0.055, 0.675, 0.19) ${delay}s`;

            // Add or remove the "fade-in" class based on the scroll position
            if (index < 4 || imageTop < windowHeight) {
                image.classList.add("fade-in");
            } else {
                image.classList.remove("fade-in");
            }
        });
    }

    function handleScroll() {
        const scrollDirection = window.scrollY > this.scrollY;
        if (scrollDirection !== isScrollingDown) {
            isScrollingDown = scrollDirection;
            addFadeInClass();
        }
    }

    // Initial "fade-in" class on page load for the first four items
    addFadeInClass();

    // Add scroll event listener for the rest of the items
    window.addEventListener("scroll", handleScroll);
});
