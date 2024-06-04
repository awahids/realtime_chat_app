Rails.application.routes.draw do
  get '/chatroom/:id', to: 'chatrooms#show', as: 'chatroom'
  
  root "chatrooms#index"
  resources :chatrooms, only: [:index, :show, :create] do
    resources :messages, only: [:create]
  end

  mount ActionCable.server => '/cable'
end
