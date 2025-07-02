const {createApp, ref, computed} = Vue;

createApp ({
    setup() {
        const product = ref('boot')
        const brand = ref('SE 311')
        const description = ref('this is boots use to walk')
        const click = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inventory = ref('11')
        const onsale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ])
        const selectedVariant = ref(0)
        const sockSizes = ref(['S','M','L'])
        const cart = ref(0)

        const title = computed(() =>{
            return brand.value + ' ' + product.value
        })
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() =>{
            return variants.value[selectedVariant.value].quantity
        })

        function addToCart() {
            cart.value +=1
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        function changeStatus(){
            inStock.value = !inStock.value;
        }
        function updateVariant(index){
            selectedVariant.value = index;
        }
    
        return{
            title,
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
            changeStatus,
            updateVariant
        }
    }

}).mount('#app')