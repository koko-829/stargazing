class StarsController < ApplicationController
  def new
    @star = Star.new
  end

  def create
    @star = Star.new(stars_params)
    if @star.save
      @selected_star = Star.offset( rand(Star.count) ).first
      session[:star_id] = @selected_star.id
      redirect_to stars_path
    end
  end

  def index
    @selected_star = Star.find(session[:star_id])
  end

  # createアクションで一回shuffle挟んでたけど、そもそもいらないかもしれない
  # def shuffle
  #   if Star.present?
  #     @selected_star = Star.offset( rand(Star.count) ).first
  #     session[:star_id] = @selected_star.id
  #     redirect_to stars_path
  #   end
  # end
end

private
def stars_params
  params.require(:star).permit(:name, :word)
end
