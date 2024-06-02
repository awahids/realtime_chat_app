<template>
  <div class="message-form">
    <input type="text"
      v-model="userName"
      placeholder="Your name" />
    <input type="text"
      v-model="newMessage"
      @keyup.enter="sendMessage"
      placeholder="Type a message" />
  </div>
</template>

<script>
export default {
  props: ['roomId'],
  data() {
    return {
      newMessage: '',
      userName: ''
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === '' || this.userName.trim() === '') return;
      fetch('/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          room_id: this.roomId,
          content: this.newMessage,
          userName: this.userName
        })
      })
        .then(response => response.json())
        .then(data => {
          this.$emit('message-sent', data);
        });
      this.newMessage = '';
    }
  }
}
</script>

<style>
.message-form {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background-color: white;
  border-top: 1px solid #ccc;
}

.message-form input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
