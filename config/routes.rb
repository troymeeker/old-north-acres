Rails.application.routes.draw do
 namespace :api do 

 resources :lodgings, only: [:index, :show ]
 resources :reviews, only: [:index, :show, :create, :update, :destroy]
 #  index, show, create, update, destroy only admin or creator can edit/ delete


  get "/me", to: "users#show"
  post "/usersignup", to: "users#create"
  post "/userlogin", to: "sessions#create"
  delete "/userlogout", to: "sessions#destroy"

  get "/about", to: "static_pages#about"
  get "/newreview", to: "static_pages#newreview"
  get "/book", to: "static_pages#book"
  get "/contact", to: "static_pages#contact"
 end

 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
