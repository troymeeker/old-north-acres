class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :content, :user_can_modify, :user_id, :lodging_id

  def user_can_modify
    current_user.admin? || current_user == self.object.user
  end
end
