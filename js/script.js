// Navbar
const hamburger = document.querySelector('.hamburger');
const toggleMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    // this.classList.toggle('show-nav');
})

toggleMenu.addEventListener('click', function () {
    // this.classList.toggle('is-active');
    this.classList.toggle('show-nav');
})



// Portfolio Section
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
    panel.addEventListener('mouseenter', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// End Portfolio Section