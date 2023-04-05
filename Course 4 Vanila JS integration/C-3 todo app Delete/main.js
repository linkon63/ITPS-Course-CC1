const domButton = document.getElementById('domEvent')
const domResult = document.getElementById('domResult')
const selectDomByName = document.getElementsByName("input1")

const form = document.getElementById('todoForm') //      catch by Id
const formInput = document.getElementById('todoName') // catch by Id
const todoShow = document.getElementById('todoShow') //  catch by Id


// DOM related work event

function handleClick() {
    console.log("✅ Im clicked 1st")
    const ele = document.getElementById('p3');
    
    if (ele.parentNode) {
        ele.parentNode.removeChild(ele);
    }

    // const nodes = document.querySelector("#domResult") ///exceptional rules
    // console.log("✅ Nodes : ", nodes)

    // nodes.remove() // delete all nodes

    nodes.removeAttribute('p3')

    // const head = document.getElementById('heading')
    // multiple class add
    // head.classList.add("border")
    // head.classList.add("border-3")
    // head.classList.add("border-danger")
    // head.classList.add("bg-success")

    //   element.classList.remove("mystyle");


    //border border-3 border-danger
}

// domButton.addEventListener('click', (e) => {
//     console.log("✅ Im clicked 1st : ")
//     // console.log("✅ Im clicked 1st : ", selectDomByName[0])

//     // selectDomByName[0].value = "hello Im injected"
//     // document.getElementsByName('input1')[3].value = "Im four"

//     // console.log("document.getElementById('input1')[2] : ", document.getElementsByName('input1')[3])
//     // .value = "Im four"



//     // document.getElementById('domResult').innerHTML = "<h1>Hello Im H1</h1>"
//     // document.getElementById('domResult').innerText = "Im from paragraph"
//     // domResult.innerText = "Im from paragraph"
// })
// domButton.addEventListener('onmouse', (e) => {
//     console.log("✅ Im clicked")
// })



// add todo in list
form.addEventListener('submit', (e) => {
    e.preventDefault() // stop reload in form submissions
    const inputData = formInput.value // getting input data  
    const node = document.createElement("li") // create element attributes <li> <p> <span> <h1> <h2>
    const textNode = document.createTextNode(inputData) // search bar data will created here
    node.appendChild(textNode) // search bar data will insert in <li> or element
    todoShow.appendChild(node)
    // delete existing value
    formInput.value = ""
})





    // console.log("Node", node)

    // node.classList.add("border bg-success text-white fw-bold text-center")

    // <ul>
    // <li>{searchbarData}</li>
    //</ul>

    // < li class="border bg-success text-white fw-bold text-center" >
    //     Your first todo
    //         </li >

    // TODO: Need this lated (If not using delete this)
    // const todoObject = {
    //     name: inputData,
    //     id: Math.floor(Math.random() * (1000 - 10) + 10)
    // }
    // document.getElementById('todoShow').appendChild(node) // it will also work
    // console.log("Your Todo:", todoObject)
    // todoArray.push(todoObject)
    // console.log("todoArray:", todoArray)
    // console.log("todoShow:", todoShow)

    // console.log("Input data formInput", formInput)
    // console.log("Input data input", input)
    // console.log("🔄️ Input data value : ", formInput.value)
    // console.log("Im Submitting", e)


// all event in dom
// event :   // attributes
// Event	Description
// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload
