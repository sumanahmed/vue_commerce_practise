<template>
    <div class="col-3 mb-3">
        <div class="card text-left">
            <img :src="product.image" alt="" class="w-100 card-img-top">
            <div class="card-body">
                <h4 class="card-title">                    
                    <router-link :to="{ name:'product', params: {id: product.id} }"> {{ product.title }} </router-link>
                </h4>
                <span>${{ product.price }}</span>
                <p class="card-text">{{ product.title }}</p>
            </div>
            <div class="px-4 pb-3">
                <button class="btn btn-secondary" @click="addToCart">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:['product'],
    methods: {
        ... mapActions(["addProductToCart"]),
        addToCart() {
            this.addProductToCart({
                product: this.product,
                quantity: 1
            })
        }
    }
}
</script>

<style>

</style>