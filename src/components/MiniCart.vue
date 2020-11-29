<template>
    <div>
        <div class="dropdown-menu p-2" style="min-width:260px;right:0;left:auto;" aria-labelledby="dropdownMenuButton">
            <div v-for="item in cart" :key="item.product.id">
                <div class="pex-2 d-flex justify-content-between">
                    <div>
                        <strong>{{ item.product.title }}</strong><br/>
                        {{ item.quantity }} x ${{ item.product.price }}
                    </div>
                    <div>
                        <a href="#" class="badge badge-secondary" @click.prevent="removeProductFromCart(item.product)">Remove</a>
                    </div>
                </div>
                <hr/>
            </div>
            <div>
                <div class="d-flex justify-content-between">
                    <span>Total : ${{ cartTotalPrice }}</span>
                    <a href="#" @click.prevent="clearCartItems">Clear Cart</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';
export default {
    computed: {
        ... mapState(["cart"]),
        ... mapGetters(["cartTotalPrice"])
    },
    mounted() {
        this.getCartItems();
    },
    methods: {
        ... mapActions(["removeProductFromCart","clearCartItems","getCartItems"])
    }

}
</script>

<style>

</style>