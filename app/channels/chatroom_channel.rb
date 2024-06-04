class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chatroom_channel_#{@chatroom.id}
  end

  def unsubscribed
  end
end
