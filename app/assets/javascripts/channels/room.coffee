App.room = App.cable.subscriptions.create "RoomChannel",
  connected: ->
    # Dipanggil ketika langganan siap digunakan di server

  disconnected: ->
    # Dipanggil ketika langganan telah diakhiri oleh server

  received: (data) ->
    # Dipanggil ketika ada data masuk pada websocket untuk saluran ini
    $('#messages').append "<p><b>#{data.message.userName}:</b> #{data.message.content}</p>"