import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

/**
 * 引入request
 * */
import request from './request.js';

// 执行结果
var plugin = request({
  baseUrl: "http://192.168.146.1:87/users/"
});

Vue.use(plugin)
const app = new Vue({
    ...App
})
app.$mount()
