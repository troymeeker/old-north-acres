class ReviewsController < ApplicationController
      # user can add reviews, delete and edit their own reviews
      # only admin can edit or delete all reviews

      before_action :set_post, only: [:show, :update, :destroy]
      before_action :authorized, only: [:update, :destroy]

      def index

      end

      def show

      end

      def create

      end

      def destroy

      end

      private
       
      def review_params
        params.permit(:content, :user_id, :lodging_id)
      end

      def set_post

      end

      def authorized

        authorized = current_user.admin? || current_user.id == @post.user_id
        render json: { error: "You are not authorized for this action" }, status: :forbidden unless is_authorized
  
      end
end
