class CreateDashboards < ActiveRecord::Migration[5.2]
  def change
    create_table :dashboards do |t|
      t.date :date, null: false
      t.float :amount, null: false
      t.text :note
      t.timestamps
    end
  end
end
