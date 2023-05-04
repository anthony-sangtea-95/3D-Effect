
const cards = document.querySelectorAll('.card');

cards.forEach((item)=>{
    const sneaker = item.querySelector('.sneaker');
    const info = item.querySelector('.info');
    const buttons = item.querySelector('.buttons');
    const tags = item.querySelector('.tags');

    item.addEventListener('mousemove',(e)=>{
        let xAxis = (window.innerWidth/2 - e.pageX)/10;
        let yAxis = (window.innerHeight/2 - e.pageY)/10;
        item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    item.addEventListener('mouseenter', (e)=>{
        item.style.transition = 'none';
        // sneaker.style.transform = `translateZ(70px) rotateZ(-30deg)`;
        sneaker.style.transform = `translateZ(75px) rotateZ(30deg)`;
        info.style.transform = `translateZ(75px)`;
        buttons.style.transform = `translateZ(75px)`;
        tags.style.transform = `translateZ(75px)`;
    });

    item.addEventListener('mouseleave', (e) => {
        item.style.transition = 'all 0.5s ease-out';
        item.style.transform = `rotateY(0deg) rotateX(0deg)`;
        sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
        info.style.transform = `translateZ(0px)`;
        buttons.style.transform = `translateZ(0px)`;
        tags.style.transform = `translateZ(0px)`;
    })
});
