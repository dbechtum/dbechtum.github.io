//set active category
let links = document.querySelectorAll("a.nav-link.category");
for(let link of links){
    console.log("test");
    link.addEventListener('click', () => {
        for(let x of links){
            x.classList.remove("active");
        }
        link.classList.add("active");
    });
}