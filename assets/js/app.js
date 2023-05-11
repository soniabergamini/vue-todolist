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
                { text: 'Take a walk with Dea 🦮',   done: false }
            ],
            mainClasses: "dFlex alignCenter justyCenter",
            liClasses: "dFlex gap2em justySpaceBtw",
            inpuntInv: "",
            currentMouseover: "null",
            currentDelMouseover: "null"
        }
    },
    methods: {
        // Remove task after click on trash icon
        removeTask(position) {
            this.todoList.splice(position, 1)
        },
        // Add task after input a new todo
        addTask() {
            if (this.newTask.text.length > 2) {
                // If newTask is correctly written, add it to the list
                this.todoList.push({...this.newTask}),
                this.newTask.text = ""
                // Alternative Method to add newTask:
                // let newTodo = { text: this.newTask.text, done: false },
            } else {
                // If newTask is badly written, add/remove shake animation
                this.inpuntInv = "animation: shake .2s; animation-iteration-count: 2;",
                setTimeout(() => this.inpuntInv = "", 600);
            }   
            this.currentMouseover = null,
            this.currentDelMouseover = null                
        },
        // Change task status (done: true/false)
        changeTaskStatus(i) {
            this.todoList[i].done = !this.todoList[i].done
        },
        // Dynamically add class dNone to change status button tooltips
        tooltipsStatClass(i) {
            return (this.currentMouseover != i) ? "dNone" : null
        },
        // Dynamically add class dNone to delete button tooltips
        tooltipsDelClass(i) {
            return (this.currentDelMouseover != i) ? "dNone" : null
        },
        // Show tooltip on "change task status button" mouseover
        showStatusTooltip(i) {
            this.currentMouseover = i
        },
        // Show tooltip on "delete task button" mouseover
        showDelTooltip(i) {
            this.currentDelMouseover = i
        },
        // Hide tooltip on "change status/delete task button" mouseleave
        hideTooltip() {
            this.currentMouseover = null,
            this.currentDelMouseover = null
        }
    }
}).mount('#app')