class ApplicationController < ActionController::Base


  # before_action :authenticate_user!

  protected


  def after_sign_in_path_for(resource)
    '/playground'
  end

   def after_sign_out_path_for(resource)
    root_path
  end
end