class CreateJams < ActiveRecord::Migration[6.0]
  def change
    create_table :jams do |t|
      t.string :title
      t.string :content
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
