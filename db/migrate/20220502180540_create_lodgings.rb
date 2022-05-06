class CreateLodgings < ActiveRecord::Migration[7.0]
  def change
    create_table :lodgings do |t|
      t.string :description
      t.string :image
      t.integer :sleeps
      t.boolean :shower

     
    end
  end
end
