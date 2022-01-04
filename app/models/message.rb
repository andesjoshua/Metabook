class Message < ApplicationRecord
  belongs_to :wallet
  has_many :comments
end
