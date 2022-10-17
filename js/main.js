// variables
let about_btn = document.getElementById('about');
let skills_btn = document.getElementById('skills');
let hobbies_btn = document.getElementById('hobbies');
let studies_btn = document.getElementById('studies');
let proyects_btn = document.getElementById('proyects');
let contact_btn = document.getElementById('contact');
let dark_btn = document.getElementById('dark-mode');
let switch_mode = document.getElementById('switch');
let scrollToTop = document.getElementById('scrollTop')
let sendbtn = document.getElementById('send_btn')

// event listeners
switch_mode.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
})


function scrollToTopFunction(pxScreen) {
    window.addEventListener('scroll', ()=>{
        let scroll = document.documentElement.scrollTop;
        
        if (scroll > pxScreen){
            scrollToTop.style.right = 20 + "px"
        } else {
            scrollToTop.style.right = -100 + "px"
        }
    })   

    scrollToTop.addEventListener('click', ()=>{
        window.scrollTo(top)
    })
}

scrollToTopFunction(400);

about_btn.addEventListener('click',()=>{
    window.scroll({
        top:480,
        left: 0,
        behavior: "smooth"
    })
})
skills_btn.addEventListener('click',()=>{
    window.scroll({
        top:1020,
        left: 0,
        behavior: "smooth"
    })
})
hobbies_btn.addEventListener('click',()=>{
    window.scroll({
        top:1400,
        left: 0,
        behavior: "smooth"
    })
})
studies_btn.addEventListener('click',()=>{
    window.scroll({
        top:1980,
        left: 0,
        behavior: "smooth"
    })
})
proyects_btn.addEventListener('click',()=>{
    window.scroll({
        top:2620,
        left: 0,
        behavior: "smooth"
    })
})
contact_btn.addEventListener('click',()=>{
    window.scroll({
        top:document.body.scrollHeight,
        left: 0,
        behavior: "smooth"
    })
})

sendbtn.addEventListener('click', ()=>{
    alert('Correo enviado correctamente!')
})