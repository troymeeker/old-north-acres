class ReviewSerializer < ActiveModel::Serializer

  attributes  :username, :description, :rating, :lodging_id, :user_id, :user_can_modify

  def user_can_modify
    current_user.admin? || current_user == self.object.user
  end
end
