import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { App } from 'vue'

import * as Icons from '@element-plus/icons-vue'

export default {
  install (app: App) {
    app.use(ElementPlus)
    Object.keys(Icons).forEach((key) => {
      app.component(key, Icons[key as keyof typeof Icons])// TS中用这行
    })
  }
}
