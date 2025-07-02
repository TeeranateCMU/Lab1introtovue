const {createApp, ref} = Vue;

createApp ({
    setup() {
        const product = ref('boot')
        const image = ref('./assets/images/socks_green.jpg')
        const description = ref('this is boots use to walk')
        const click = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(true)
    
        return{
            product,
            inStock,
            description,
            image,
            click
        }
    }

}).mount('#app')