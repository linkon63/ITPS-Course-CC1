const heading = document.getElementById("heading");
const mainText = String(heading.innerHTML)
const changeBtn = document.getElementById('change')
const undo = document.getElementById('undo')
const redo = document.getElementById('redo')

changeBtn.addEventListener('click', () => {
    heading.innerText = "Change Your Heading"
    heading.style.backgroundColor = "red"
    console.log(mainText)
})

undo.addEventListener('click', () => {
    heading.innerText = mainText
    heading.style.backgroundColor = "yellow"

})

redo.addEventListener('click', () => {
    heading.innerText = "Change Your Heading"
    heading.style.backgroundColor = "blue"

})

