class CreateRecords < ActiveRecord::Migration[5.2]
  def change
    create_table :records do |t|
      t.references :dashboard, foreign_key: true
      t.references :category, foreign_key: true
      t.references :payment, foreign_key: true
      t.timestamps
    end
  end
end
