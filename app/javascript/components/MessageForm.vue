<template>
  <div class="message-form">
    <input type="text"
      v-model="userName"
      placeholder="Your name" />
    <input type="text"
      v-model="newMessage"
      @keyup.enter="sendMessage"
      placeholder="Type a message" />
    <button @click="sendMessage">Kirim</button>
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
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.$emit('message-sent', data);
        })
        .catch(error => {
          console.error('Error:', error);
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
  width: 80%;
  padding: 0.5rem;
  font-size: 1rem;
}

.message-form button {
  width: 20%;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>