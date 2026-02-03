const smallImg = Document.querySelectorAll(".gallery img")
const fullImg = Document.querySelector(".full-img")
const modal = Document.querySelector(".modal")
smallImg.forEach(img => {
    img.addEventListener("click", ()=>{
       const fullsize = img.getAttribute("alt")
       const patch = `galaxy/full/${fullsize}.jpg`
       fullImg.src=Path
       modal.classList.add("open")
       })
})

modal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
    }
})