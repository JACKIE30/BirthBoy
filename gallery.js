const filterButtons=document.querySelectorAll(".filter_buttons button");
const filterableCards=document.querySelectorAll(".main .gallery");

const filterCards=e=>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(gallery=>{
        gallery.classList.add("hide");
        if(gallery.dataset.name===e.target.dataset.name || e.target.dataset.name === "all"){
            gallery.classList.remove("hide");
        }
    });
    

};

filterButtons.forEach(button=>button.addEventListener("click", filterCards));