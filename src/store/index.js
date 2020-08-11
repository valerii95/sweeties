import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: JSON.parse(localStorage.getItem('products')) || []
  },
  mutations: {
    addToCart(state, product) {
      if(!product.quantity) {
        product.quantity = 1;
      }
      let productTitles = state.products.map(el => el.title);
      if(productTitles.indexOf(product.title) !== -1) {
        product.quantity++;
        state.products.pop();
      }
      state.products.push(product);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    removeFromCart(state, idx) {
      state.products.splice(idx, 1);
      localStorage.setItem('products', JSON.stringify(state.products));
    }
  },
  actions: {
    addToCart(context, product) {
      context.commit('addToCart', product);
    },
    removeFromCart(context, idx) {
      context.commit('removeFromCart', idx);
    }
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
})
