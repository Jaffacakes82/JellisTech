import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHighlightJS from 'vue-highlightjs'
import csharp from 'highlight.js/lib/languages/cs';
import 'highlight.js/styles/vs2015.css';
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false
Vue.use(VueHighlightJS, {
  languages: {
    csharp
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')