class RoomsController < ApplicationController
  # Menampilkan daftar semua ruangan
  def index
    @rooms = Room.all
  end

  # Menampilkan detail ruangan
  def show
    @room = Room.find(params[:id])
    @messages = @room.messages
  end
end