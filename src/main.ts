import { createApp } from 'vue'
import App from './App.vue'
import index from './pages/index.vue'
import report from './pages/report.vue'
import data from './pages/data.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Router from 'vue-router'
const router = Router.createRouter({
  routes:[
    {path:'/',component:index,children:[
      {path:'/report/:id/:name',component:report},
      {path:'/data',component:data},
    ]},
  ],
  history:Router.createMemoryHistory(),
})
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
console.log(app)
