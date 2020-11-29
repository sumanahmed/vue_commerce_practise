const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

const SET_PRODUCT = (state, product) => {
    state.product = product;
}

const ADD_TO_CART = (state, {product, quantity}) => {

    let productInCart = state.cart.find( item => {
        return item.product.id === product.id;
    });

    if (productInCart) {
        productInCart.quantity += quantity;
        return;
    }

    state.cart.push({
        product, quantity
    })
}

const SET_CART = (state, cartItems) => {
    state.cart = cartItems;
}

const REMOVE_PRODUCT_FROM_CART = (state, product) => {
    state.cart = state.cart.filter( item => {
        return item.product.id !== product.id;
    })
}

const CLEAR_CART_ITEMS = (state) => {
    state.cart = [];
}

export default {
    SET_PRODUCTS,
    SET_PRODUCT,
    ADD_TO_CART,
    SET_CART,
    REMOVE_PRODUCT_FROM_CART,
    CLEAR_CART_ITEMS
}