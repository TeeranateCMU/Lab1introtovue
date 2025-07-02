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
            { id: 2234, color: 'green'},
            { id: 2235, color: 'blue'}
        ])
        const sockSizes = ref(['S','M','L'])
    
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
            sockSizes
        }
    }

}).mount('#app')