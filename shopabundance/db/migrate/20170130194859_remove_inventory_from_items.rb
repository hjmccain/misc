class RemoveInventoryFromItems < ActiveRecord::Migration[5.0]
  def change
    remove_column :items, :current_inventory, :numeric
  end
end
