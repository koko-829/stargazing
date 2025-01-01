Rails.application.routes.draw do
  # localhost:3000のアクセス先指定
  root to: 'stars#new'
  resources :stars, only: %i[index create new] do
    collection do
      get 'shuffle'
    end
  end

  # viewのテンプレ確認用アクション
  resources :practice do
    collection do
      get 'display0'
      get 'display1'
      get 'display2'
      get 'display3'
      get 'display4'
      get 'display5'
    end
  end

  resources :template do
    collection do
      get 'form'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  # Defines the root path route ("/")
  # root "posts#index"
end
