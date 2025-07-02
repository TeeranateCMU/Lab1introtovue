const {createApp, ref} = Vue;

createApp ({
    setup() {
        const product = ref('boot')
        const description = ref('this is boots use to walk')
        const inStock = ref(true)
        return{
            product,
            inStock,
            description
        }
    }

}).mount('#app')