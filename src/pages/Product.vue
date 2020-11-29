<template>
  <div class="container mt-3" v-if="product">
      <div class="row">
          <div class="col-4">
              <img :src="product.image" alt="" class="w-100" />
          </div>
          <div class="col-8">
              <h2>{{ product.title }}</h2>
              <h4>${{ product.price }}</h4>
              <input type="text" v-model.number="quantity" class="text-center col-1 mr-2 p-1" id="" />
              <button class="btn btn-primary" @click="addToCart">Add to cart</button>
              <p class="mt-4">{{ product.description }}</p>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    props:['id'],
    data() {
        return {
            quantity: 1,
        }
    },
    computed: {
        ... mapState(["product"])
    },
    mounted(){
        this.getProduct(this.id);
    },
    methods: {
        ... mapActions(["getProduct","addProductToCart"]),
        addToCart(){          
            this.addProductToCart({                
                product: this.product,
                quantity: this.quantity
            })
        }
    }
}
</script>

<style>

</style>