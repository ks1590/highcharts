class Category < ApplicationRecord
  has_many :records, dependent: :destroy
  has_many :dashboards, through: :records
end
