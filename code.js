const FONDO_VERDE=document.querySelector('.fondo-verde');
const FONDO_NARANJA=document.querySelector('.fondo-naranja');

const CIRCULO_UNO=document.querySelector('.circulo__uno');
const CIRCULO_DOS=document.querySelector('.circulo__dos');

CIRCULO_DOS.addEventListener('click',()=>{
    FONDO_NARANJA.classList.add('active');
})
CIRCULO_UNO.addEventListener('click',()=>{
    FONDO_NARANJA.classList.remove('active');
})