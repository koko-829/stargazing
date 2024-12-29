class Star < ApplicationRecord
  validates :word, presence: true, length: { minimum: 2, maximum: 50}
  validates :name, presence: true, length: { maximum: 30}
end
