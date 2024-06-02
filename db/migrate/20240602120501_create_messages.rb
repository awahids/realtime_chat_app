class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.references :room, null: false, foreign_key: true
      t.text :content
      t.string :userName

      t.timestamps
    end
  end
end
