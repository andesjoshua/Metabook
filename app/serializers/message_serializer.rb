class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at
  has_one :wallet
  has_many :comments
end
