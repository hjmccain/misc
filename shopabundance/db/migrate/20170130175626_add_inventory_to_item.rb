class AddInventoryToItem < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :current_inventory, :numeric
  end
end
