Rails.application.routes.draw do

  resources :jams
  devise_for :users
  # root "onepage#landing"
   # root :to => redirect('/users/sign_up')
   root "onepage#index"

#make the registration page root, and move i=onepage index to /playground

  # get 'onepage/index'
  # get '/playground' => 'onepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end