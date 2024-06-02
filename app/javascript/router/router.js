import { createRouter, createWebHistory } from 'vue-router';
import Chatroom from '../components/Chatroom.vue';
import MessageForm from '../components/MessageForm.vue';
import Sidebar from '../components/Sidebar.vue';

const routes = [
  {
    path: '/chatroom/:roomId',
    name: 'chatroom',
    component: Chatroom,
  },
  {
    path: '/message-form/:roomId',
    name: 'message-form',
    component: MessageForm,
  },
  {
    path: '/',
    name: 'sidebar',
    component: Sidebar,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
