class Record < ApplicationRecord
  belongs_to :dashboard
  belongs_to :category
  belongs_to :payment
end
