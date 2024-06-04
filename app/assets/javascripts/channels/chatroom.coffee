App.chatroom = App.cable.subscriptions.create "ChatroomChannel",
  connected: ->
    console.log 'Connected to chatroom channel'

  disconnected: ->

  received: (data) ->
    $('#messages').append data.message
