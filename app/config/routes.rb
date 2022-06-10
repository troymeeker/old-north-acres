Rails.application.routes.draw do
 
 resources :lodgings, only: [:index, :show ]
 resources :reviews, only: [:index, :show, :create, :update, :destroy]
 #  index, show, create, update, destroy only admin or creator can edit/ delete


  get "/me", to: "users#show"
  post "/usersignup", to: "users#create"
  post "/userlogin", to: "sessions#create"
  delete "/userlogout", to: "sessions#destroy"

end
