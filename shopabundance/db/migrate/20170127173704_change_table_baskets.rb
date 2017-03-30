class ChangeTableBaskets < ActiveRecord::Migration[5.0]
  def change
    rename_table :baskets, :line_item
  end
end
