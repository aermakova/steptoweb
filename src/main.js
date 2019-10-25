import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebaseConfig from './config/firebase'
import firebase from "firebase"
import VuetifyConfirm from 'vuetify-confirm'


Vue.use(Vuetify);


Vue.config.productionTip = false;

Vue.use(VuetifyConfirm, {
  Vuetify,
  buttonTrueText: 'Да',
  buttonFalseText: 'Нет, конечно!',
  color: 'warning',
  icon: 'warning',
  title: 'Warning',
  width: 350,
  property: '$confirm'
});

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    let vm = this;
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch('STATE_CHANGED', user);
    });
  }
}).$mount('#app');
