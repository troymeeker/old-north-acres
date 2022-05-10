class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :username, :description, :rating, :lodging_id, :user_can_modify, :user_id

  def user_can_modify
    current_user.admin? || current_user == self.object.user
  end

end
