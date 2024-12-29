class CreateStars < ActiveRecord::Migration[7.2]
  def change
    create_table :stars do |t|
      t.string :word
      t.string :name

      t.timestamps
    end
  end
end
