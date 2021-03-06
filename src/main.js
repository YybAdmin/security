// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import API_LIST from './apiList'
import myUtil from '@/assets/js/com/myUtil'
import echartUtil from '@/assets/js/com/echartUtil'

import axios from 'axios'
Vue.prototype.$http = axios

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import 'vx-easyui/dist/themes/myTheme/easyui.css'
import 'vx-easyui/dist/themes/icon.css'
import 'vx-easyui/dist/themes/vue.css'
import '@/assets/css/easyui/myEasyui.css'
import EasyUI from 'vx-easyui'
Vue.use(EasyUI)

import mui from 'vue-awesome-mui'
Vue.use(mui)

Vue.config.productionTip = false
Vue.prototype.$API_LIST = API_LIST
Vue.prototype.$myUtil = myUtil
Vue.prototype.$echartUtil = echartUtil

if(Vue.prototype.$API_LIST.ifUseMock == true){
  require('@/mock/hujin')
  require('@/mock/jingpin')
  require('@/mock/datagrid')
  require('@/mock/treegrid')
  require('@/mock/yidong')
  require('@/mock/yanjiuyuan')
}

/* eslint-disable no-new */
Vue.prototype.$myUtil.getAppUserInfo();

setTimeout(function () {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
},100)

