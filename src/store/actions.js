import axios from 'axios';
const getProducts = ({commit}) => {
    axios.get('http://localhost:8000/api/products')
    .then( (response) => {
        commit('SET_PRODUCTS', response.data.data);
    })
}

const getProduct = ({commit}, productId) => {
    axios.get(`http://localhost:8000/api/products/${productId}`)
    .then( (response) => {
        commit('SET_PRODUCT', response.data.data);
    })
}

const addProductToCart = ({commit}, {product, quantity}) => {
    commit('ADD_TO_CART', {product, quantity});
    axios.post('http://localhost:8000/api/cart/store', {
        product_id : product.id,
        quantity
    });
}

const getCartItems = ({commit}) => {
    axios.get('http://localhost:8000/api/cart')
        .then( (response) => {
            commit('SET_CART', response.data.data);
        })
}

const removeProductFromCart = ({commit}, product) => {
    commit('REMOVE_PRODUCT_FROM_CART', product);
    axios.delete(`http://localhost:8000/api/cart/${product.id}`)
}

const clearCartItems = ({commit}) => {
    commit('CLEAR_CART_ITEMS');
    axios.delete('http://localhost:8000/api/cart')
}

export default {
    getProducts,
    getProduct,
    addProductToCart,
    getCartItems,
    removeProductFromCart,
    clearCartItems
}