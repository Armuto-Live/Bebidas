const FONDO_VERDE=document.querySelector('.fondo-verde');
const FONDO_NARANJA=document.querySelector('.fondo-naranja');

const HOJA_UNO=document.querySelector('.hoja__uno');
const HOJA_DOS=document.querySelector('.hoja__dos');
const HOJA_TRES=document.querySelector('.hoja__tres');
const HOJA_CUATRO=document.querySelector('.hoja__cuatro');

const CIRCULO_UNO=document.querySelector('.circulo__uno');
const CIRCULO_DOS=document.querySelector('.circulo__dos');

CIRCULO_DOS.addEventListener('click',()=>{
    FONDO_NARANJA.classList.add('active');
    HOJA_UNO.classList.add('dinamic__uno');
    HOJA_DOS.classList.add('dinamic__dos');
    HOJA_TRES.classList.add('dinamic__tres');
    HOJA_CUATRO.classList.add('dinamic__cuatro');
})
CIRCULO_UNO.addEventListener('click',()=>{
    FONDO_NARANJA.classList.remove('active');
    HOJA_UNO.classList.remove('dinamic__uno');
    HOJA_DOS.classList.remove('dinamic__dos');
    HOJA_TRES.classList.remove('dinamic__tres');
    HOJA_CUATRO.classList.remove('dinamic__cuatro');
})