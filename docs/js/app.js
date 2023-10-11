const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () =>
    header.classList.toggle("active"));
    
function redirect(idPrato) {
    const list = document.querySelector(".list");
    list.style.display = "none";

    window.location.href = "#" + idPrato;
}

function display() {
    
    const list = document.querySelector(".list");
    list.style.display = "block"

}
      
  