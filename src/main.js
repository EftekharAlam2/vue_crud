import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ItemList from './components/ItemList.vue'
import EditItem from './components/EditItem.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const routes = [
  { path: '/', component: ItemList, name: 'item-list' },
  { path: '/edit/:id', component: EditItem, name: 'edit-item' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app')
