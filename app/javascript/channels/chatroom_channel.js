import consumer from "./consumer"

const initChatroomCable = () => {
  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    const chatroomId = messagesContainer.dataset.chatroomId;

    consumer.subscriptions.create({ channel: "ChatroomChannel", chatroom_id: chatroomId }, {
      received(data) {
        messagesContainer.insertAdjacentHTML('beforeend', data.message);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      },
    });
  }
}

export { initChatroomCable };
