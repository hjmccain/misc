class Item < ApplicationRecord
  has_many(:line_items)

  def quantity
    line_items.map(&:qty).reduce(0) { |sum, num| sum + num }
  end

end
