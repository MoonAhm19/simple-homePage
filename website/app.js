gsap.to('.nav', {
    backgroundColor: '#01665c',
    height: '70px',
    duration: .5,
    scrollTrigger: {
        trigger: '.nav',
        scroller: 'body',
        start: 'top -100px',
        end: 'top -300px',
        scrub: 1
    }
})

gsap.to('.popular', {
    backgroundColor: '#01665c',
    duration: 5,
    scrollTrigger: {
        trigger: '.popular',
        scroller: 'body',
        start: 'top 700px',
        end: 'bottom bottom',
        scrub: 5
    }
})

gsap.to('.post', {
    bottom: '70px',
    duration: 5,
    scrollTrigger: {
        trigger: '.post',
        scroller: 'body',
        start: 'top 700px',
        end: 'bottom bottom',
        scrub: 3
    }
})


const menu = document.querySelector('#nav-item');

const bar = document.querySelector('#menu-bar');

bar.addEventListener('click', (e) => {
    menu.classList.toggle('active')
})