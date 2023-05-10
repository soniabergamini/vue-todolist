const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                { text: 'Go to the market',         done: true }, 
                { text: 'Have launch with Jack',    done: false }, 
                { text: 'Send emails',              done: false }, 
                { text: 'Learn VueJS',              done: true },
                { text: 'Take a walk with Dea🦮',   done: false }
            ],
            mainClasses: "dFlex alignCenter justyCenter",
            liClasses: "dFlex gap2em justySpaceBtw",
        }
    }
}).mount('#app')