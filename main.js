const {createApp, ref, computed} = Vue;

const app = createApp ({
    setup() {
        const cart = ref(0)
        const premium = ref(true)
        function updateCart() {
            cart.value +=1
        }
        const details = ref(["50% cotton", "30% wool", "20% polyester"])
        return{
            cart,
            premium,
            details,
            updateCart
        }
    }
})

app.component('product-display', productDisplay).component("product-details", productDetails).mount("#app")