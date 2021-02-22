import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//轮播图
import carousel from "@/components/carousel.vue";
Vue.component("carousel", carousel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,//引入element后添加一个这个，还需注意在用脚手架构建时，vue要选择2.x的版本，不能3.x
  render: h => h(App)
});


