const p = document.querySelector('p');
const btns = document.querySelectorAll('button')
let pAffects = () => {
    btns[0].addEventListener('click', () => {
        btns[0].classList.toggle('btn-click')
        p.classList.toggle('red-color')
    })
    btns[2].addEventListener('mouseover', () => {
        p.classList.toggle('btn-size')

    })
    btns[1].addEventListener('mouseout', () => {
        p.classList.toggle('btn-style')

    })
}
pAffects()