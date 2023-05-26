export default function navBack(setPosNav, posNav) {
    if (window.pageYOffset>= 50) {
        setPosNav((window.scrollY-50)/100)
        document.querySelector('header').style.background=`linear-gradient(to bottom, rgba(0, 0, 0, ${posNav}) 85%, rgba(0, 0, 0, 0) 100%)`
        document.querySelector('header').style.transitionDuration='0.2'
    }
    else{
        document.querySelector('header').style.background="linear-gradient(to top, rgba(72, 72, 72, 0) 20% , #000000 120%)"
        document.querySelector('header').style.transitionDuration='0.2'
    }
}