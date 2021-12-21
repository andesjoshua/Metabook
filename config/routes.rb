Rails.application.routes.draw do
  
  # resources :messages, only: :index
  resources :wallets, only: :index
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  get '/forum', to: "messages#index"
  post '/wallets', to: "wallets#create"
  post '/messages', to: "messages#create"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
