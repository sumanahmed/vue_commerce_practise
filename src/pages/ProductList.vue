<template>
    <div class="container"> 
        <div class="row mt-3">
            <product-card v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ProductCard from '../components/ProductCard'
export default {
    name:'ProductList',
    components:{
        'product-card' : ProductCard,
    },
    computed:{
        ... mapState(["products"])
    },
    mounted(){
        this.getProducts();
    },
    methods:{
        ... mapActions(["getProducts"])
    }
}
</script>

<style>

</style>