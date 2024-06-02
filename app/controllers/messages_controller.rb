class MessagesController < ApplicationController
  # Menampilkan semua pesan untuk ruangan tertentu
  def index
    @messages = Message.where(room_id: params[:room_id])
    render json: @messages
  end

  # Membuat pesan baru
  def create
    @message = Message.new(message_params)
    if @message.save
      ActionCable.server.broadcast "room_#{@message.room_id}_channel",
        message: @message
      render json: @message, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  private

  # Memperbolehkan parameter yang diterima
  def message_params
    params.require(:message).permit(:room_id, :content, :user_name)
  end
end