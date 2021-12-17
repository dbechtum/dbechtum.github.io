Vue.component('poster', {
    template: `
    <div class="posterContainer p-3 m-0" :category="category">
        <div class="posterInnerContainer p-0 m-0">
            <div class="posterImg rounded shadow" @click="showProduct(title, id, stock)">
                <img :src="image_path + image_display_as + id + image_extension" alt="" class="posterImg img-fluid rounded">
            </div>
            <div class="overlayBackground rounded-bottom">
                <div class="overlayText">
                    <p class="browseItemName">{{title}}</p>
                </div>
            </div>
        </div>
    </div>
    `,
    props: ['title','category','id','stock','image_path','image_display_as','image_extension'],
    methods: {
        showProduct: function (_title, _id, _stock) {
            let updateInfo = [_title, _id, _stock];
            this.$emit('emit_update_product', updateInfo);
            $('.product').fadeIn();
            $('.productBackground').fadeIn();
        }
    }
})

Vue.component('posterCategory', {
    template: `
    <li class="nav-item">
        <a :id="category" class="nav-link category pt-0 pb-1" :category="category">{{ category }}</a>
    </li>
    `,
    props: ['category']
})

Vue.component('cartItem', {
    template: `
    <li class="nav-item">
        <img :src="image_path + image_display_as + content_id + image_extension">
        <p>Title: {{ content_title }}</p>
        <p>Orientation: {{ content_orientation }}</p>
        <p>Size: {{ content_size }}</p>
        <p>Amount: {{ content_amount }}</p>
        <p>Price: {{ content_price }}</p>
        <p>Price Total: {{ content_price * content_amount }}</p>
    </li>
    `,
    props: ['content_title','content_id','content_stock','content_orientation','content_size','content_amount','content_price','image_path','image_display_as','image_extension']
})

let app = new Vue({
    el: '#app',
    data: {
        //test cartContent
        //cartContent: [{title: "test", id: 0, orientation: "Portrait", size: "Large", amount: 2}],
        cartContent: [],
        productTitle: 'Poster Title',
        productId: 0,
        productStock: 0,
        description: 'You know, those things that keep your feet warm?...',
        selectedOrientation: 0,
        orientations: ["Landscape", "Portrait"],
        selectedSize: 0,
        sizes: ["Large", "Medium", "Small"],
        discount: 1.00,

        image_display_as: 'portrait/',
        //image_display_as: 'landscape/',
        image_path: '/assets/images/posters/',
        image_extension: '.jpg',
        posters: [
            {
                id: 0,
                stock: 50,
                title: 'Field and Treeline',
                category: 'Nature',
            },
            {
                id: 1,
                stock: 50,
                title: 'Sunset',
                category: 'Skies',
            },
            {
                id: 2,
                stock: 105,
                title: 'Bird',
                category: 'Animals',
            },
            {
                id: 3,
                stock: 25,
                title: 'Puppy',
                category: 'Animals',
            },
            {
                id: 4,
                stock: 50,
                title: 'Falcon Heavy Launch',
                category: 'Space',
            },
            {
                id: 5,
                stock: 9,
                title: 'SpaceX Dragon',
                category: 'Space',
            },
            {
                id: 6,
                stock: 50,
                title: 'Space Shuttle Launch',
                category: 'Space',
            },
            {
                id: 7,
                stock: 110,
                title: 'Night Sky',
                category: 'Skies',
            },
            {
                id: 8,
                stock: 50,
                title: 'Falcon 9 Launch',
                category: 'Space',
            },
            {
                id: 9,
                stock: 75,
                title: 'Falcon 9 Launch',
                category: 'Space',
            },
            {
                id: 10,
                stock: 50,
                title: 'Buck',
                category: 'Animals',
            },
            {
                id: 11,
                stock: 100,
                title: 'Cat',
                category: 'Animals',
            },
            {
                id: 12,
                stock: 50,
                title: 'Skyline',
                category: 'Places',
            },
            {
                id: 13,
                stock: 50,
                title: 'Sunset',
                category: 'Skies',
            },
            {
                id: 14,
                stock: 200,
                title: 'Ocean Sky',
                category: 'Skies',
            },
            {
                id: 15,
                stock: 50,
                title: 'ISS',
                category: 'Space',
            },
            {
                id: 16,
                stock: 50,
                title: 'Moonman',
                category: 'Space',
            },
            {
                id: 17,
                stock: 200,
                title: 'Clouds',
                category: 'Skies',
            },
            {
                id: 18,
                stock: 200,
                title: 'Galaxy',
                category: 'Space',
            },
            {
                id: 19,
                stock: 9,
                title: 'Whale',
                category: 'Animals',
            },
            {
                id: 20,
                stock: 200,
                title: 'Kitten',
                category: 'Animals',
            },
            {
                id: 21,
                stock: 5,
                title: 'Christmas Tree',
                category: 'Holiday',
            },
            {
                id: 22,
                stock: 4,
                title: 'Winter Cabin',
                category: 'Holiday',
            },
            {
                id: 23,
                stock: 50,
                title: 'Fox',
                category: 'Animals',
            },
            {
                id: 24,
                stock: 50,
                title: 'Elephant',
                category: 'Animals',
            },
            {
                id: 25,
                stock: 50,
                title: 'ISS Aurora',
                category: 'Space',
            },
            {
                id: 26,
                stock: 50,
                title: 'Skyline',
                category: 'Places',
            },
            {
                id: 27,
                stock: 50,
                title: 'Horses',
                category: 'Animals',
            },
            {
                id: 28,
                stock: 50,
                title: 'Denver Streets',
                category: 'Places',
            },
            {
                id: 29,
                stock: 2,
                title: 'Christmas Tree',
                category: 'Holiday',
            },
            {
                id: 30,
                stock: 50,
                title: 'Nebula',
                category: 'Space',
            }
        ],
    },
    methods: {
        updateProduct: function (variables) {
            this.productTitle = variables[0];
            this.productId = variables[1];
            this.productStock = variables[2];
        },
        hideProduct: function () {
            $('.product').fadeOut();
            $('.productBackground').fadeOut();
        },
        setDiscount: function (amount) {
            this.discount = amount;
        },
        updateOrientation: function (index) {
            this.selectedOrientation = index;
        },
        updateSize: function (index) {
            this.selectedSize = index;
        },

        addToCart: function () {
            let index = this.cartContent.findIndex(
                x => x.title === this.productTitle &&
                x.id === this.productId &&
                //x.stock === this.productStock &&
                x.orientation === this.orientations[this.selectedOrientation] &&
                x.size === this.sizes[this.selectedSize]);
            if(index === -1){
                this.cartContent.push({
                    title: this.productTitle,
                    id: this.productId,
                    //stock: this.productStock,
                    orientation: this.orientations[this.selectedOrientation],
                    size: this.sizes[this.selectedSize],
                    amount: 1
                })
            } else {
                this.cartContent[index].amount++;
            }
            this.updateCartHeader();
        },
        updateCartHeader: function(){
            let cartAmount = document.querySelector(".cartAmount");
            
            let itemCount = 0;
            for (let i = 0; i < this.cartContent.length; i++) {
                itemCount += this.cartContent[i].amount;
            }
            cartAmount.innerHTML = itemCount;
            if(itemCount === "0"){
                cartAmount.style.display = "none";
            } else {
                cartAmount.style.display = "inline-block";
            }
        }
    },
    computed: {
        stock() {
            if (this.productStock >= 200){
                this.setDiscount(0.6);
                return "Mega Deal!";
            } else if (this.productStock >= 100){
                this.setDiscount(0.8);
                return "Discount!";
            } else if (this.productStock >= 10){
                this.setDiscount(1);
                return "In Stock";
            } else if (this.productStock > 0){
                this.setDiscount(1);
                return "Almost Sold Out";
            } else {
                this.setDiscount(1);
                return "Sold Out";
            }
        },
        megaDeal() {
            if (this.productStock >= 200){
                return true;
            }
        },
        deal() {
            if (this.productStock >= 100 && this.productStock < 200){
                return true;
            }
        },
        price(){
            switch (this.selectedSize){
                case 0:
                    return 15 * this.discount;
                    break;
                case 1:
                    return 10 * this.discount;
                    break;
                case 2:
                    return 5 * this.discount;
                    break;
            }
        },
        originalPrice(){
            switch (this.selectedSize){
                case 0:
                    if(this.discount != 1){
                        return 15;
                        break;
                    }
                    return 0;
                    break;
                case 1:
                    if(this.discount != 1){
                        return 10;
                        break;
                    }
                    return 0;
                    break;
                case 2:
                    if(this.discount != 1){
                        return 5;
                        break;
                    }
                    return 0;
                    break;
            }
        },
        categories(){ 
            let catList = [];
            let i = 0;
            for (poster in this.posters){
                let cat = this.posters[i].category;
                if(cat) {
                    catList.push(cat);
                }
                i++
            }
            //return unique entries in catList as a new array
            return [...new Set(catList)]
        },
        image(){
            if(this.productId != 0){
                switch (this.selectedOrientation){
                    case 0:
                        return `/assets/images/posters/landscape/${this.productId}.jpg`;
                        break;
                    case 1:
                        return `/assets/images/posters/portrait/${this.productId}.jpg`
                }
            } else {
                switch (this.selectedOrientation){
                    case 0:
                        return `/assets/images/posters/landscape/1.jpg`;
                        break;
                    case 1:
                        return `/assets/images/posters/portrait/1.jpg`
                }
            }
        }
    }
})