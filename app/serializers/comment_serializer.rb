class CommentSerializer < ActiveModel::Serializer
  attributes :id, :reply, :created_at, :message_id, :wallet_id
  has_one :wallet
end
