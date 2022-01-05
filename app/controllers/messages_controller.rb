class MessagesController < ApplicationController

    def index
        render json: Message.all
    end

    def create
        content = Message.create!(message_params)
        render json: content, status: :created
    end

    def destroy
        message = Message.find_by(id: params[:id])
        if message
            message.destroy
            head :no_content
        end
    end

    private

    def message_params
        params.permit(:content, :wallet_id)
    end
end
