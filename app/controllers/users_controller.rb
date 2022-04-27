class UsersController < ApplicationController

     # POST /signup
  def create
    user = User.create(user_params) 
    if user.id
      session[:user_id] = user.id
      render json: user, status: :ok
    else 
      render json: { error: user.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
