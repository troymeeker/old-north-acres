class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :description, :lodging_id, :user_can_modify, :user_id, :starRating, :user

  def user_can_modify
    current_user.admin? || current_user == self.object.user
  end

  # def author
  #   self.object.user
  # end

end
