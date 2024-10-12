const a = Number(document.getElementById('value1').innerText)
const b = Number(document.getElementById('value2').innerText)

const op = document.getElementById('result')

function addFunction() {
    const c = a + b
    op.innerText = 'Output Add: ' + c
}

// document.getElementById('addBtn').onclick((e) => {
//     console.log('hello')
// })

// console.log(window)