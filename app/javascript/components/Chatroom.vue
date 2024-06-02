<template>
  <div class="chatroom">
    <h2>Messages</h2>
    <ul>
      <li v-for="message in messages"
        :key="message.id">
        <strong>{{ message.userName }}:</strong> {{ message.content }}
      </li>
    </ul>
    <MessageForm :roomId="roomId"
      @message-sent="handleMessageSent" />
  </div>
</template>

<script>
import MessageForm from './MessageForm.vue';

export default {
  props: ['roomId'],
  data() {
    return {
      messages: []
    }
  },
  watch: {
    roomId: 'fetchMessages'
  },
  created() {
    if (this.roomId) {
      this.fetchMessages();
      this.createSubscription();
    }
  },
  methods: {
    fetchMessages() {
      fetch(`/messages?room_id=${this.roomId}`)
        .then(response => response.json())
        .then(data => {
          this.messages = data;
        });
    },
    createSubscription() {
      consumer.subscriptions.create(
        { channel: "RoomChannel", room_id: this.roomId },
        {
          received: (data) => {
            this.messages.push(data.message);
          }
        }
      );
    },
    handleMessageSent(data) {
      this.messages.push(data);
    }
  },
  components: {
    MessageForm
  }
}
</script>

<style>
.chatroom {
  width: 75%;
  padding: 1rem;
}
</style>