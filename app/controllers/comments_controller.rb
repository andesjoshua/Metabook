class CommentsController < ApplicationController

    def index
        render json: Comment.all
    end

    def create
        reply = Comment.create!(comment_params)
        render json: reply, status: :created
    end

    private

    def comment_params
        params.permit(:wallet_id, :reply, :message_id)
    end
end
