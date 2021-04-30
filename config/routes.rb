Rails.application.routes.draw do
  resources :countries do
    resources :regions do
      resources :cities
    end
  end

  resources :regions do
    resources :cities
  end

  root 'countries#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
