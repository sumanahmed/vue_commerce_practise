<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <router-link tag="li" class="nav-link nav-item active" to="/">Home</router-link>
                        <router-link tag="li" class="nav-link nav-item" to="/product">Product</router-link>
                    </ul>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ cartItemCount }} Cart
                        </button>
                        <div @click="$event.stopPropagation()"> 
                            <mini-cart></mini-cart>
                        </div>                        
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import MiniCart from './MiniCart';
export default {
    components:{
        'mini-cart' : MiniCart,
    },
    computed: {
        ...mapGetters(["cartItemCount"])
    }
}
</script>

<style>
 li.nav-item{
     cursor: pointer;
 }
</style>