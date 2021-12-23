class MessagesController < ApplicationController

    def index
        render json: Message.all
    end

    def create
        content = Message.create!(message_params)
        render json: content, status: :created
    end

    private

    def message_params
        params.permit(:content, :wallet_id)
    end
end
