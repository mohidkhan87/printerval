 import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
 
// with options
Vue.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'https://www.w3tweaks.com/images/essentials/css-loaders/chrome-cast-loader.gif',
  attempt: 1,
  // listenEvents: ['scroll', 'wheel', 'mousewheel']
})