Rails.application.routes.draw do
 
 
  get "/me", to: "users#show"
  post "/usersignup", to: "users#create"
  post "/userlogin", to: "sessions#create"
  delete "/userlogout", to: "sessions#destroy"

end
