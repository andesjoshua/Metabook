class WalletsController < ApplicationController
    def index
        render json: Wallet.all
    end

    def create
        wallet = Wallet.create(wallet_params)
        render json: wallet, status: :created
    end

    
    private

    def wallet_params
        params.permit(:address)
    end
    
end
