const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: {
                text: "",
                done: false
            },
            todoList: [
                { text: 'Go to the market',         done: true }, 
                { text: 'Have launch with Jack',    done: false }, 
                { text: 'Send emails',              done: false }, 
                { text: 'Learn VueJS',              done: true },
                { text: 'Take a walk with Dea🦮',   done: false }
            ],
            mainClasses: "dFlex alignCenter justyCenter",
            liClasses: "dFlex gap2em justySpaceBtw"
        }
    },
    methods: {
        // Remove task after click on trash icon
        removeTask(position) {
            this.todoList.splice(position, 1)
        },
        // Add task after input a new todo
        addTask() {
            // let newTodo = {
            //     text: this.newTask.text,
            //     done: false
            // };
            let newTodo = {...this.newTask};
            this.todoList.push(newTodo),
            this.newTask.text = ""
        }
    }
}).mount('#app')