class Lodging < ApplicationRecord
    has_many :bookings
    
    has_many :reviews
    has_many :users, through: :reviews
end
