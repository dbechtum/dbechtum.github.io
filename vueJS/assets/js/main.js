Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    template: `
    <div class="product">
            <div class="product-image">
                <div class="image">
                    <img :src="image">
                    <div v-show="megaDeal" class="sale">-40%</div>
                    <div v-show="deal" class="sale">-20%</div>
                </div>

            </div>
            <div class="product-info">
                <h1>{{ product }}</h1>
                <h2>{{ stock }}</h2>
                <h3>{{ description }}</h3>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div v-for="(variant, index) in variants" :key="variant.id"
                    class="color-box" :style="{backgroundColor: variant.color}"
                    @click='updateProduct(index, "click")'
                    @mouseenter='updateProduct(index, "enter")'
                    @mouseleave='updateProduct(index, "leave")'>
                </div>
                <div v-for="size in sizes" :key="size">
                    <p>{{ size }}</p>
                </div>
                <p>Shipping: {{ shipping }}</p>
                <button v-on:click="addToCart" :disabled="soldOut"
                    :class="{ disabledButton: soldOut}">Add to
                    Cart</button>
            </div>
        </div>
    `,
    data() {
        return {
            product: 'Socks',
            description: 'You know, those things that keep your feet warm?...',
            selectedVariant: 0,
            tempVariant: 0,
            details: ["80% cotton", "20% plyester", "Gender-neutral"],
            variants: [
                {
                    id: 2234,
                    color: "green",
                    image: './assets/vmSocks-green.jpg',
                    inventory: 200
                },
                {
                    id: 2235,
                    color: "blue",
                    image: './assets/vmSocks-blue.jpg',
                    inventory: 50
                }
            ],
            sizes: ["Large", "Medium", "Small"]
        }
    },
    methods: {
        addToCart: function () {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        updateProduct: function (index, method) {
            if (method === "click"){
                this.selectedVariant = index;
                this.tempVariant = index;
            } else if (method === "enter"){
                this.tempVariant = this.selectedVariant;
                this.selectedVariant = index;
            } else if (method === "leave"){
                this.selectedVariant = this.tempVariant;
            }
        }
    },
    computed: {
        megaDeal() {
            if (this.variants[this.selectedVariant].inventory >= 200){
                return true;
            }
        },
        deal() {
            if (this.variants[this.selectedVariant].inventory >= 100 && this.variants[this.selectedVariant].inventory < 200){
                return true;
            }
        },
        stock() {
            if (this.variants[this.selectedVariant].inventory >= 200){
                return "Mega Deal!";
            } else if (this.variants[this.selectedVariant].inventory >= 100){
                return "Discount!";
            } else if (this.variants[this.selectedVariant].inventory >= 10){
                return "In Stock";
            } else if (this.variants[this.selectedVariant].inventory > 0){
                return "Almost Sold Out";
            } else {
                return "Sold Out";
            }
        },
        soldOut() {
            if (this.variants[this.selectedVariant].inventory <= 0){
                return true;
            } else {
                return false;
            }
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        shipping() {
            if(this.premium){
                return "Free";
            } else {
                return "1,99";
            }
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: []
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
        }
    }
})