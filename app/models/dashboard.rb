class Dashboard < ApplicationRecord
  validates :date, presence: true
  validates :amount, presence: true
  validates :note, presence: true

  has_many :records, dependent: :destroy
  has_many :categories, through: :records
  has_many :payments, through: :records
end
