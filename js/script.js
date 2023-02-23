
const sectionOne = document.querySelector(".home");
const remove = document.querySelector(".second-nav");
const add = document.querySelector(".add")

const option = {
    root: null,
    threshold: 0,
    rootMargin: "-10px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            remove.classList.add("remove");
            remove.classList.add("add");
        } else {
            remove.classList.remove("add");
            add.classList.remove("remove");
      }
    });
}, option);

observer.observe(sectionOne)


var scroll = document.querySelector("header");
var bar = document.querySelector("#bars");

bar.onclick =()=> {
    bar.classList.toggle("fa-times");
    scroll.classList.toggle("active");
}
window.onscroll=()=>{
    scroll.classList.remove("active");
    bar.classList.remove("fa-times");
}


