class ChangeDatatypeOfContent < ActiveRecord::Migration[6.0]
  def change
    change_column :jams, :content, 'json USING CAST(content AS json)'
  end
end