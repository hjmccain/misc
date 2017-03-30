class ChangeTableLineItem < ActiveRecord::Migration[5.0]
  def change
    rename_table :line_item, :line_items
  end
end
