import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: navigator.cookieEnabled ? JSON.parse(localStorage.getItem('products')) || [] : []
  },
  mutations: {
    addToCart(state, product) {
      let productIdx = state.products.map(el => el.title).indexOf(product.title);

      if(productIdx !== -1) {
        state.products[productIdx]['quantity']++;
      }
      if(productIdx == -1) {
        state.products.push(product);
      }
    },
    removeFromCart(state, args) {
      let productIdx = state.products.map(el => el.title).indexOf(args[1]);
      state.products[productIdx]['quantity'] = 1;
      state.products.splice(args[0], 1);
    },
    isCookiesEnabled(state) {
      if(navigator.cookieEnabled) {
        localStorage.setItem('products', JSON.stringify(state.products));
      }
    },
    incrementQty(state, title) {
      let productIdx = state.products.map(el => el.title).indexOf(title);
      state.products[productIdx]['quantity']++;
    },
    decrementQty(state, title) {
      let productIdx = state.products.map(el => el.title).indexOf(title);
      if(state.products[productIdx]['quantity'] > 1) {
        state.products[productIdx]['quantity']--;
      }
    },
    setQty(state, args) {
      let productIdx = state.products.map(el => el.title).indexOf(args[1]);
      state.products[productIdx]['quantity'] = args[0];
    }
  },
  actions: {
    addToCart(context, product) {
      context.commit('addToCart', product);
      context.commit('isCookiesEnabled');
    },
    removeFromCart(context, args) {
      context.commit('removeFromCart', args);
      context.commit('isCookiesEnabled');
    },
    incrementQty(context, title) {
      context.commit('incrementQty', title);
      context.commit('isCookiesEnabled');
    },
    decrementQty(context, title) {
      context.commit('decrementQty', title);
      context.commit('isCookiesEnabled');
    },
    setQty(context, args) {
      context.commit('setQty', args);
      context.commit('isCookiesEnabled');
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    totalSum(state) {
      let counter = 0;
      
      state.products.forEach(product => {
        counter += (product.price * product.quantity)
      });

      return counter;
    }
  }
})
