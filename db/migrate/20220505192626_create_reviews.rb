class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :username
      t.string :description
      t.string :rating
      t.integer :lodging_id
      


      # t.timestamps
    end
  end
end
