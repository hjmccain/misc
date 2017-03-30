class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :type
      t.string :name
      t.numeric :qty

      t.timestamps
    end
  end
end
