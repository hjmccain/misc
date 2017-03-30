class AddItemToLineItem < ActiveRecord::Migration[5.0]
  def change
    add_reference :line_items, :item, foreign_key: true
  end
end
