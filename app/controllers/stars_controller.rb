class StarsController < ApplicationController
  def new
    @star = Star.new
  end

  def create
    @star = Star.new(stars_params)
    if @star.save
      @selected_star = Star.offset(rand(Star.count)).first
      session[:star_id] = @selected_star.id
      redirect_to result_stars_path
    end
  end

  def result
    @selected_star = Star.find(session[:star_id])
  end
end

private
def stars_params
  params.require(:star).permit(:name, :word)
end
