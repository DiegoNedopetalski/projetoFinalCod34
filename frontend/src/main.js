import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkRpZWdvIE5lZG9wZXRhbHNraSIsImVtYWlsIjoiZGllZ29sdWlzLm5lZG9AZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTcwOTkzMTg0MSwiZXhwIjoxNzEwMTkxMDQxfQ.CeSk0MwqetWZTpo7g1sdg5HNnMyr35c_rgv0n6IR_7w'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')