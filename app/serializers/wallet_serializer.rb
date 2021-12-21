class WalletSerializer < ActiveModel::Serializer
  attributes :id, :address, :created_at
end
