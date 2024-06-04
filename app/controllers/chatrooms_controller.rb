class ChatroomsController < ApplicationController
  def index
    @chatrooms = Chatroom.all
  end

  def show
    @chatroom = Chatroom.find(params[:id])
    @messages = @chatroom.messages
    @chatrooms = Chatroom.all
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)
    if @chatroom.save
      redirect_to chatrooms_path
    else
      @chatrooms = Chatroom.all
      render :index
    end
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:name)
  end
end
