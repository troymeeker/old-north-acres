class Lodging < ApplicationRecord
    has_many :bookings
    has_many :users, through: :reviews
    has_many :reviews
end
