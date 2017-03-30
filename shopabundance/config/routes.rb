Rails.application.routes.draw do

  resources :items do
    collection do
      get 'all'
      get 'market'
      get 'inventory'
    end
    member do
      get 'stock'
      get 'order'
    end
  end

  resources :line_items do
    collection do
      get 'all_line_items'
    end
  end

  root 'items#index'
end
