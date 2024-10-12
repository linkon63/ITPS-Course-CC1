<template>
  <main>
    <div class=" ">
      <nav
        class="h-[80px] bg-blue-500 text-white font-bold text-3xl text-center flex justify-center items-center"
      >
        <h1 class="uppercase">Your Todo App</h1>
      </nav>
      <div class="flex justify-center mt-10">
        <div class="w-8/12 bg-blue-400 rounded-3xl p-8">
          <!-- input section -->

          <div class="flex justify-center">
            <div class="bg-white px-8 py-4 m-4">
              <router-link to="/">Home</router-link>
            </div>
            <div class="bg-white px-8 py-4 m-4">
              <router-link to="/fav">Favorite</router-link>
            </div>
          </div>

          <div class="flex">
            <input
              @keydown.enter="todoAdd"
              v-model="state.inputValue"
              type="text"
              placeholder="Your Todo"
              class="p-2 text-lg bg-white w-11/12 rounded-lg"
            />
            <button
              class="w-1/12 mx-2 rounded-lg font-bold text-white"
              @click="todoAdd"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="56px" width="56px">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z"
                    fill="#1C274C"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <!-- todos section -->

          <div
            v-for="todo in state.todoArray"
            :key="todo"
            class="card bg-white mt-2 flex rounded-lg"
          >
            <div class="w-7/12 p-2 flex items-center">
              <input
                @keydown.enter="todo.editable = false"
                v-if="todo.editable"
                v-model="todo.value"
                type="text"
                placeholder="Your Todo"
                class="p-2 text-lg bg-white w-full rounded-lg"
              />
              <p v-else>{{ todo?.value }}</p>
            </div>
            <div class="w-5/12 flex justify-end p-2">
              <button class="mx-4" @click="deleteTodo(todo)">
                <svg viewBox="0 0 24 24" height="46px" width="46px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#cfcfcf"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z" fill="#890a01"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0689 8.49993C20.2101 8.49999 20.3551 8.50005 20.5 8.49805V12.9999C20.5 16.7711 20.5 18.6568 19.3284 19.8283C18.1569 20.9999 16.2712 20.9999 12.5 20.9999H11.5C7.72876 20.9999 5.84315 20.9999 4.67157 19.8283C3.5 18.6568 3.5 16.7711 3.5 12.9999V8.49805C3.64488 8.50005 3.78999 8.49999 3.93114 8.49993H20.0689ZM9 11.9999C9 11.5339 9 11.301 9.07612 11.1172C9.17761 10.8722 9.37229 10.6775 9.61732 10.576C9.80109 10.4999 10.0341 10.4999 10.5 10.4999H13.5C13.9659 10.4999 14.1989 10.4999 14.3827 10.576C14.6277 10.6775 14.8224 10.8722 14.9239 11.1172C15 11.301 15 11.5339 15 11.9999C15 12.4658 15 12.6988 14.9239 12.8826C14.8224 13.1276 14.6277 13.3223 14.3827 13.4238C14.1989 13.4999 13.9659 13.4999 13.5 13.4999H10.5C10.0341 13.4999 9.80109 13.4999 9.61732 13.4238C9.37229 13.3223 9.17761 13.1276 9.07612 12.8826C9 12.6988 9 12.4658 9 11.9999Z" fill="#890a01"></path> </g></svg>

              </button>
              <button class="mx-4" @click="editMe(todo)">
                <svg height="46px" width="46px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>edit [#1479]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-99.000000, -400.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M61.9,258.010643 L45.1,258.010643 L45.1,242.095788 L53.5,242.095788 L53.5,240.106431 L43,240.106431 L43,260 L64,260 L64,250.053215 L61.9,250.053215 L61.9,258.010643 Z M49.3,249.949769 L59.63095,240 L64,244.114985 L53.3341,254.031929 L49.3,254.031929 L49.3,249.949769 Z" id="edit-[#1479]"> </path> </g> </g> </g> </g></svg>
              </button>
              <button class="mx-4" @click="favMe(todo)">

                <svg v-if="todo.fav" height="46px" width="46px" viewBox="0 0 24 24" fill="#FF0000" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                <svg v-else height="46px" width="46px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>


              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'

const state = reactive({
  inputValue: '',
  todoArray: []
})

const todoAdd = () => {
  console.log('todo add', state.inputValue)
  if(state.inputValue === ''){
    return
  }

  const todoObj = {
    id: Date.now() + '',
    value: state.inputValue,
    fav: false,
    editable: false
  }

  state.todoArray.push(todoObj)
  state.inputValue = ''
  localStorage.setItem("todo", JSON.stringify(state.todoArray))
  // console.log("state.todo array", state.todoArray)
}

const deleteTodo = (todo) => {
  state.todoArray = state.todoArray.filter((td) => td.id != todo.id)
  localStorage.setItem("todo", JSON.stringify(state.todoArray))
  // without refactoring
  // const filteredTodo = state.todoArray.filter(td => td.id != todo.id)
  // console.log("filteredTodo", filteredTodo)
  // state.todoArray = filteredTodo
  // With refactoring
  // state.todoArray = state.todoArray.filter(td => td.id != todo.id)
}

const editMe = (todo) => {
  console.log('editMe', todo)
  todo.editable = true
  localStorage.setItem("todo", JSON.stringify(state.todoArray))
}

const favMe = (todo) => {
  todo.fav = !todo.fav
  localStorage.setItem("todo", JSON.stringify(state.todoArray))
}


onMounted(() => {
  const todos = JSON.parse(localStorage.getItem("todo"))
  if(todos){
    state.todoArray = todos
  }
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

main {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
