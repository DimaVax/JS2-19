const backdrop = document.querySelector('.backdrop');
const openBtn = document.querySelector('.add-button');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', (e) => {
    e.preventDefault()
    backdrop.classList.remove('is-hidden')
});
closeBtn.addEventListener('click', () => {
    backdrop.classList.add('is-hidden')
})
