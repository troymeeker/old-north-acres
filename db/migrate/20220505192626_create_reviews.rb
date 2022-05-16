class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :description
      t.integer :starRating
      t.integer :lodging_id
      t.integer :user_id
    
    end
  end
end
