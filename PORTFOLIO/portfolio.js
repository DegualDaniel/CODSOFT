

const slider = ()=>{

    let hamburger = document.querySelector('.menu');
    let navi = document.querySelector('.navbar')

    hamburger.addEventListener('click',()=>{ 
        navi.classList.toggle("nav-active") 
               //BURGER ANIMATION 
               hamburger.classList.toggle("toggle")
    }) 
    window.onscroll = () => {
        navi.classList.remove("nav-active")
        hamburger.classList.remove("toggle")
    }
}
slider()




// const cursor = document.querySelector('.cursor');
//     document.addEventListener('mouseoover', (e) =>{
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.right = e.pageY + 'px';
// })