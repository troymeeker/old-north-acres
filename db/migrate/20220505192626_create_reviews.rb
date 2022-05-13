class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :description
      t.string :rating
      t.integer :lodging_id
      t.integer :user_id
      # t.string :lodge

      # t.timestamps
    end
  end
end
