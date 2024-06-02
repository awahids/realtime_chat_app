<template>
  <div id="app">
    <Sidebar @room-selected="onRoomSelected" />
    <Chatroom :roomId="selectedRoomId" />
    <MessageForm :roomId="selectedRoomId"
      @message-sent="onMessageSent" />
  </div>
</template>

<script>
import Chatroom from './components/Chatroom.vue';
import MessageForm from './components/MessageForm.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Chatroom,
    MessageForm,
    Sidebar
  },
  data() {
    return {
      selectedRoomId: null
    };
  },
  methods: {
    onRoomSelected(roomId) {
      this.selectedRoomId = roomId;
    },
    onMessageSent(data) {
      // Handle message sent event, if needed
    }
  }
}
</script>

<style>
/* Add global styles here, if any */
</style>