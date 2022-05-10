class ReviewsController < ApplicationController
      # user can add reviews, delete and edit their own reviews
      # only admin can edit or delete all reviews

      before_action :set_post, only: [:show, :update, :destroy]
      before_action :is_authorized, only: [:update, :destroy]

      def index
        reviews = Review.all
        render json: reviews
      end

      def show
        render json: @review
      end

      # # POST /reviews
      def create
        review = current_user.reviews.create(review_params)
    
        if review.id
          render json: review,  status: :created
        else
          render json:{ error: review.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
      end

      def update
        if @review 
            @review.update(review_params)
            render json: @review, status: :accepted
        else
            render json: @review.errors, status: :not_found
        end
      end

    #   Delete /posts/:id
      def destroy
        @review.destroy
      end

      private
       
      def review_params
        params.require(:review).permit(:username, :description, :rating, :lodging_id, :user_id)
      end

      def set_post
        @review = Review.find(params[:id])
      end

      def is_authorized

        is_authorized = current_user.admin? || current_user.id == @review.user_id
        render json: { error: "You are not authorized for this action" }, status: :forbidden unless is_authorized
  
      end
end
