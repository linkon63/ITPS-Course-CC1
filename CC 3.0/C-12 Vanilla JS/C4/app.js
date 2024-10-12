
window.addEventListener("DOMContentLoaded", function(e) { 
    console.log("DOMContentLoaded")
    const testing = document.getElementById("testing")
    console.log(testing);
})


// const todoList = document.getElementById('todoList');
// const todoItem = document.getElementById('todoItem');
// const buttonNode = document.querySelectorAll("button");

// const testing = document.getElementById('testing');
// console.log(testing.innerHTML);

// const todoArray = [];


// function generateToken() {
//     const randomNum = Math.random() * 9000
//     return Math.floor(1000 + randomNum)
// }

const todoInput = document.getElementById('todoInput');

todoInput.addEventListener('change', (e) => {
    // .target.parentNode.id
    console.log(e)
    console.log('e', e.target.parentNode.parentNode.parentNode);
    console.log('e', e.target.parentNode.parentNode.childNodes);

    // nextSibling


    // console.log(todoInput);
    // const value = { id: generateToken(), text: e.target.value }
    // todoArray.push(value);
    // showTodoList(value)
    // e.target.value = ''
})

// const showTodoList = (value) => {

//     const parentDiv = document.createElement('div');
//     // <div> </div>
//     parentDiv.className = "border flex justify-evenly"
//     // <div class="border flex justify-evenly"> </div>

//     const children1 = document.createElement('div')
//     children1.className = "p-2 border"
//     children1.innerText = value.id

//     const children2 = document.createElement('div')
//     // <div> </div>
//     children2.className = "w-full p-2"
//     // <div class="w-full p-2"> </div>
//     children2.innerText = value.text
//     // <div class="w-full p-2"> abc/todo </div>

//     const children3 = document.createElement('button')
//     children3.className = "bg-red-500 px-4 py-2 rounded text-white font-bold"
//     children3.id = value.id
//     children3.innerText = "X"

//     parentDiv.appendChild(children1)
//     parentDiv.appendChild(children2)
//     parentDiv.appendChild(children3)


//     // <div class="border flex justify-evenly">
//     //      <div class="w-full p-2">
//     //          Hello 1st Todo
//     //      </div>
//     // </div>
//     console.log('value', value)
//     todoList.appendChild(parentDiv)

// }

// document.addEventListener("click", function (e) {
//     const tagName = e.target.tagName
//     if (tagName === "BUTTON") {
//         e.target.parentNode.remove()
//     }
// })

// // todoArray.map((todo, i) => {
// //     let containerDiv = document.createElement('div');
// //     containerDiv.className = "border flex justify-evenly"
// //     let childrenDiv = document.createElement('div')
// //     childrenDiv.className = "w-full p-2"
// //     childrenDiv.innerText =' Hello 1st Todo'
// //     containerDiv.appendChild(childrenDiv)

// //     todoList.appendChild(containerDiv)
// //     // console.log("index:",i," - value :",todo)
// //     // innerHtmlArray += `
// //     // <div class="border flex justify-evenly">
// //     //                     <div class="w-full p-2">
// //     //                         Hello 1st Todo
// //     //                     </div>
// //     //                     <button class="bg-red-500 px-4 py-2 rounded text-white font-bold">X</button>
// //     // </div>
// //     // `
// // })

// // todoInput.innerHTML = innerHtmlArray
// // console.log(innerHtmlArray)




// // <div class="border flex justify-evenly">
// // 1 start
// //      <div class="w-full p-2">
// //          Hello 1st Todo
// //      </div>
// // 1 end
// // 2 start
// //      <button class="bg-red-500 px-4 py-2 rounded text-white font-bold">X</button>
// // 2 end
// //</div>


// // const heading = document.getElementById("heading");
// // const mainText = String(heading.innerHTML)
// // const changeBtn = document.getElementById('change')
// // const undo = document.getElementById('undo')
// // const redo = document.getElementById('redo')

// // changeBtn.addEventListener('click', () => {
// //     heading.innerText = "Change Your Heading"
// //     heading.style.backgroundColor = "red"
// //     console.log(mainText)
// // })

// // undo.addEventListener('click', () => {
// //     heading.innerText = mainText
// //     heading.style.backgroundColor = "yellow"

// // })

// // redo.addEventListener('click', () => {
// //     heading.innerText = "Change Your Heading"
// //     heading.style.backgroundColor = "blue"

// // })

