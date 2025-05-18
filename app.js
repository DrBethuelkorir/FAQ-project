
const icons = document.querySelectorAll(".header-p img");
const contents = document.querySelectorAll(".content");

icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        const content = contents[index];
        
        // Toggle the content visibility
        content.classList.toggle("active");

        // Toggle the icon image
        if (icon.src.includes("icon-plus.svg")) {
            icon.src = "/assets/images/icon-minus.svg";
        } else {
            icon.src = "/assets/images/icon-plus.svg";
        }
    });
});



// list of items > loop []
