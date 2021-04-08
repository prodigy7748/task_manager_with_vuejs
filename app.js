var app = new Vue({
  el: "#app",
  data: {
    tasks:[
      { id: 1, name: "Task 1", description: "this is task 1", completed: false },
      { id: 2, name: "Task 2", description: "this is task 2", completed: true },
      { id: 3, name: "Task 3", description: "this is task 3", completed: false }
    ],
    message: "hello world"
  }
})
