class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.datetime :checkin
      t.datetime :checkout
      t.integer :user_id
      t.integer :lodging_id

    
    end
  end
end
