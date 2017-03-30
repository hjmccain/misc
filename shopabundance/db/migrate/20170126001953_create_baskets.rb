class CreateBaskets < ActiveRecord::Migration[5.0]
  def change
    create_table :baskets do |t|
      t.string :item
      t.numeric :qty
      t.numeric :price

      t.timestamps
    end
  end
end
