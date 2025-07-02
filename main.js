const {createApp, ref, computed} = Vue;

const app = createApp ({
    setup() {
        const cart = ref(0)
        return{
            cart
        }
    }
})

app.components('product-display', productDisplay)

app.mount('#app')