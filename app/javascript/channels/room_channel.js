import consumer from "channels/consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Dipanggil ketika langganan siap digunakan di server
  },

  disconnected() {
    // Dipanggil ketika langganan telah diakhiri oleh server
  },

  received(data) {
    // Dipanggil ketika ada data masuk pada websocket untuk saluran ini
  }
});
