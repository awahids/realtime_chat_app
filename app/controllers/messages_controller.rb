class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  def create
    @chatroom = Chatroom.find(params[:chatroom_id])
    @message = @chatroom.messages.build(message_params)

    if @message.save
      respond_to do |format|
        format.html { redirect_to @chatroom }
        format.json { render json: @message, status: :created }
      end
      ActionCable.server.broadcast "chatroom_channel_#{@chatroom.id}", message: render_message(@message)
    else
      respond_to do |format|
        format.html { redirect_to @chatroom, alert: 'Pesan tidak dapat dikirim' }
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def message_params
    params.require(:message).permit(:username, :content)
  end

  def render_message(message)
    ApplicationController.renderer.render(partial: 'messages/message', locals: { message: message })
  end
end
