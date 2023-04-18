const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Hello Vue!",
            clickHello: "d-none"
        }
    },

    methods: {

        phantomStyle() {
            if (this.clickHello === "d-none") {
                this.clickHello = "d-block"
            } else {
                this.clickHello = "d-none"
            }
        }
    }
}).mount('#app')