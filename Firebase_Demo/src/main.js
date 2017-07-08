import Vue from 'vue'
import App from './App.vue'
import Vueresource from 'vue-resource'

Vue.use(Vueresource);
// reqiured for put method
// implements the database when the new data is overwritten 
Vue.http.options.root = 'https://vue-http-8a4b1.firebaseio.com';
  Vue.http.interceptors.push((request,next)=>{
 console.log(request);
 if(request.method == 'POST'){
      request.method = 'PUT';
 }
  next(response => {
 response.json = () => { return {messages: response.body} } 
 });
});
new Vue({
    el: '#app',
    render: h => h(App)
})