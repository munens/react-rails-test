Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/api/users' => 'users#index', defaults: {format: :json}
  
  # in order to use the 'index' action as the root of our application:
  root to: 'site#index'
end
