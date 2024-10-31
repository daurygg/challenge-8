// Selecciona el botón por su ID
const sharepop = document.querySelector(".sharepoppather");

const shareButton = document.getElementById("share");

shareButton.addEventListener("click", () => {
    
    sharepop.classList.toggle("visible");
    
    shareButton.classList.toggle("active");
});