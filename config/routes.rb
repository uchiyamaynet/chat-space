# ルーティングを追加
Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resources :users, only: [:edit, :update]
end

# Rails.application.routes.draw do
#   devise_for :users
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

#   root to: "messages#index"

# end

