var app = new Vue({
  el: "#app",
  components: {
    'task': {
              props: ['task'],
              template: `
              <div class="ui segment task"
                   v-bind:class="task.completed ? 'done' : 'todo' ">
                <div class="ui grid">
                  <div class="left floated twelve wide column">
                    <div class="ui checkbox">
                      <input type="checkbox" name="task" v-model="task.completed">
                      <label for="task.completed">{{ task.name }} <span class="description">{{ task.description }}</span></label>
                    </div>
                  </div>
                  <div class="right floated three wide column"></div>
                </div>
              </div>
              `
            }
  },
  data: {
    tasks:[
      { id: 1, name: "Task 1", description: "this is task 1", completed: false },
      { id: 2, name: "Task 2", description: "this is task 2", completed: true },
      { id: 3, name: "Task 3", description: "this is task 3", completed: false }
    ]
  },
  computed: {
    completedTasks: function() {
      return this.tasks.filter( item => item.completed == true );
    },
    todoTasks: function() {
      return this.tasks.filter( item => item.completed == false);
    }
  },
})
