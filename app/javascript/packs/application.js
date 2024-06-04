import "bootstrap"
import { initChatroomCable } from "../channels/chatroom_channel"

document.addEventListener('turbolinks:load', () => {
  initChatroomCable();
})
