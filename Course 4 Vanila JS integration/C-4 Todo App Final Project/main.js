// Not use try home // Home work
// window.addEventListener('load', eventFunction())

// const eventFunction = () => {
//     console.log("Load Function")
// }

// 

window.addEventListener('load', () => {

    const form = document.getElementById('new-task-form') // form submit
    const input = document.getElementById('new-task-input') // input data
    const list_el = document.getElementById('tasks') // it is for showing
    console.log("🔄️ Load windows main js")

    // handle form
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // stop reload

        const taskValue = input.value
        // console.log("Form Submit value : ", taskValue)

        // Step 1 :  Input Box
        // parent div
        const task_el = document.createElement('div')
        task_el.classList.add('task')  // add a class

        // children div
        const task_content_el = document.createElement('div')
        task_content_el.classList.add('content')  // add a class

        // inject in parent
        task_el.appendChild(task_content_el)

        const task_input_el = document.createElement('input')
        task_input_el.classList.add('text') // add a class

        task_input_el.type = 'text'
        task_input_el.value = taskValue // value which we typed in input box  // task_input_el.value = input.value // value which we typed in input box

        task_input_el.setAttribute('readonly', 'readonly')

        task_content_el.appendChild(task_input_el)
        // console.log("task_content_el", task_content_el)

        // Step 2 : Actions Box
        const task_actions_el = document.createElement('div')
        task_actions_el.classList.add('actions') // add a class

        // create a buttons edit button
        const task_edit_el = document.createElement('button')
        task_edit_el.classList.add('edit') // add a class
        task_edit_el.innerText = 'Edit'

        // create a buttons delete button
        const task_delete_el = document.createElement('button')
        task_delete_el.classList.add('delete') // add a class
        task_delete_el.innerText = 'Delete'

        // step 3 :  inject in task_actions_el
        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)

        task_el.appendChild(task_actions_el)

        list_el.appendChild(task_el)

        // step 4 : after set the task list remove input box value
        input.value = "" // Null, NaN, Undefine -> Home task why those things we get in js


        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLocaleLowerCase() == 'edit') {
                task_edit_el.innerText = 'Save'
                task_input_el.removeAttribute('readonly')
            } else {
                task_edit_el.innerText = 'Edit'
                task_input_el.setAttribute('readonly', 'readonly')
            }
        })

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el)
        })


    })


})
