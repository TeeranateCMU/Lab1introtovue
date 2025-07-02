const {createApp, ref} = Vue;

createApp ({
    setup() {
        const product = ref('boot')
        const image = ref('./assets/images/socks_green.jpg')
        const description = ref('this is boots use to walk')
        const click = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(true)
        const inventory = ref('11')
        const onsale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
        ])
        const sockSizes = ref(['S','M','L'])
        const cart = ref(0)

        function addToCart() {
            cart.value +=1
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        function changeStatus(){
            inStock.value = !inStock.value;
        }
    
        return{
            product,
            inStock,
            description,
            image,
            click,
            inventory,
            onsale,
            details,
            variants,
            sockSizes,
            cart,
            addToCart,
            updateImage,
            changeStatus
        }
    }

}).mount('#app')