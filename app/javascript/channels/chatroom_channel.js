// Import consumer from "./consumer"
import consumer from "./consumer"

const initChatroomCable = () => {
  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    const chatroomId = messagesContainer.dataset.chatroomId;

    consumer.subscriptions.create({ channel: "ChatroomChannel", chatroom_id: chatroomId }, {
      received(data) {
        // Ambil kontainer pesan
        const messagesContainer = document.getElementById('messages');
        if (!messagesContainer) return;

        // Tambahkan pesan baru
        messagesContainer.insertAdjacentHTML('beforeend', data.message);

        // Gulir ke bawah
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      },
    });
  }
}

export { initChatroomCable };
