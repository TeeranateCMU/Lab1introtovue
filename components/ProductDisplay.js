const productDisplay = {
    template:
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                     <img :src="image" :class="{'out-of-stock-img': !inStock}">
                </div>
            </div>
        </div>
        <div class="product-info">
            <a :href="click"><h1>{{title}}</h1></a>
            <p>{{description}}</p>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if = "inventory <= 10 && inventory > 0">Almost out of stock</p>
            <p v-else>Out Of Stock</p>
            <p> Shipping: {{shipping}}</p>
            <p v-if="onsale == true">on sale</p>
            <p v-else-if="onsale != true">not on sale</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">
            </div>
            <p><span v-for="sockSize in sockSizes">{{sockSize}}</span></p>
            <button class="button" :disable='!inStock' @click="addToCart" :class="{'disabledButton': !inStock}">Add To Cart</button>
            <button class="button" @click="changeStatus">{{ inStock ? 'Out of Stock' : 'In Stock' }}</button>
        </div>`,
        props: {
            premium: Boolean
        },
        setup(props) {
            const product = ref('boot')
            const brand = ref('SE 311')
            const description = ref('this is boots use to walk')
            const click = ref('https://www.camt.cmu.ac.th/index.php/th/')
            const inventory = ref('11')
            const onsale = ref(true)
            const shipping = computed(()=>{
                if (props.premium){
                    return 'Free'
                } else {
                    return 30
                }
            })
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
                addToCart,
                updateImage,
                changeStatus,
                updateVariant,
                shipping
            }
        }
}