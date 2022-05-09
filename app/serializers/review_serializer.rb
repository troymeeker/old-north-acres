class ReviewSerializer < ActiveModel::Serializer

  attributes :user_can_modify, :username, :description, :rating, :lodging_id

  def user_can_modify
    current_user.admin? || current_user == self.object.user
  end
end
