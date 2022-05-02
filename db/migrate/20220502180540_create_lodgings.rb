class CreateLodgings < ActiveRecord::Migration[7.0]
  def change
    create_table :lodgings do |t|
      t.string :location
      t.integer :sleeps
      t.boolean :shower

      # t.timestamps
    end
  end
end
