class Review < ApplicationRecord
    # user can add reviews, delete and edit their own reviews
    # only admin can edit or delete all reviews
    belongs_to :user
    belongs_to :lodging

  
    validates :description, presence: true
     # join table for user/lodging
end
