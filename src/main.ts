import { createApp } from 'vue'
import App from './App.vue'
import elementPlus from './plugins/element-plus'
import router from './router'
import { store, key } from './store'

import './styles/index.scss'

createApp(App)
  .use(router)
  .use(store, key)
  .use(elementPlus, { size: 'small', zIndex: 2000 })
  .mount('#app')
