let app = new Vue({
    el: "#vueApp",
    data: {
     todos: [
        /* test data*/
        {
          id: 1,
          title: 'Go workout',
          completed: false
        },
        {
          id: 2,
          title: 'Do laundry',
          completed: false
        },
        {
          id: 3,
          title: 'Cook food',
          completed: false
        },
        {
          id: 4,
          title: 'Clean up room',
          completed: false
        },
        {
          id: 5,
          title: 'Finish work',
          completed: false
        }
      ],
         crossedNames: []
    },
    
    methods: {

    addTodo: function (e) {
            alert("test")
            /*const newTodoObj = {
                hardcoded value
                id: 6,
                title: this.title,
                completed: false 
    
            }
            
            this.$emit('add-todo', newTodoObj);
            this.title = '';*/
    
        }, 
        
    markComplete() {
      this.todo.completed = !this.todo.completed
    }
        
    },
    
    mounted() {

    },
});
